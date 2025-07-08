// utils/showConfirmToast.ts
import { toast } from 'react-toastify';

export const showConfirmToast = (
  message: string,
  onConfirm: () => void,
  onCancel?: () => void
) => {
  const toastId = toast(
    () => (
      <div className="space-y-2">
        <p>{message}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              onConfirm();
              toast.dismiss(toastId);
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => {
              onCancel?.();
              toast.dismiss(toastId);
            }}
            className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
          >
            No
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    }
  );
};
