import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { LoginData } from '../../types';
import { toast } from 'react-toastify';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    setIsLoading(true);
    setError('');

    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Invalid email or password. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="space-y-6 font-serif">
      <div
        className="flex items-center cursor-pointer text-[#0084C2] hover:text-blue-800 transition duration-200 w-max"
        onClick={() => window.location.href = '/'}      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        <span className="text-sm font-medium">Back to Home</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-100 border border-red-300 text-red-600 rounded-md">
            {error}
          </div>
        )}

        <div>
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="email@gmail.com"
            icon={<Mail className="h-5 w-5" />}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                message: 'Please enter a valid Gmail address'
              }
            })}
            error={errors.email?.message}
            fullWidth
          />
        </div>

        <div>
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="••••••••"
            icon={<Lock className="h-5 w-5" />}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
            error={errors.password?.message}
            fullWidth
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isLoading}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
