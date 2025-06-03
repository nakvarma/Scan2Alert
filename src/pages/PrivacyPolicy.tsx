import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
    const policies = [
        { title: 'Information We Collect', description: 'We collect information such as name, contact details, vehicle documents, and user activity on the portal.' },
        { title: 'How We Use Your Data', description: 'Your data is used solely for the purpose of vehicle registration, user verification, and service communication.' },
        { title: 'Data Security', description: 'We implement industry-standard security protocols to ensure your data remains safe and protected at all times.' },
        { title: 'Sharing of Information', description: 'We do not sell or rent your personal data. It is only shared with government agencies when required by law.' },
        { title: 'Cookies & Tracking', description: 'We use cookies to enhance user experience and track usage patterns. You can disable cookies via your browser.' },
        { title: 'Contact & Complaints', description: 'If you have any concerns regarding your data privacy, please contact us at privacy@carportal.com.' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
            <div className="shrink-0">
                <Navbar />
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#0084C2' }}>
                            Privacy Policy
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base">
                            Your privacy is important to us. Please read how we collect, use, and protect your information.
                        </p>
                    </div>

                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base"> */}
                        <div>
                        {/* {policies.map((policy, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl text-white shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
                                style={{ backgroundColor: '#0084C2' }}
                            >
                                <div className="relative z-10 p-6 text-center">
                                    <h2 className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                                        {policy.title}
                                    </h2>
                                    <p className="mt-2 text-sm group-hover:opacity-75 transition-opacity duration-300">
                                        {policy.description}
                                    </p>
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                                    style={{ backgroundImage: 'url(/images/privacy-bg.jpg)' }}
                                ></div>
                            </div>
                        ))} */}

                        <h1 className='font-bold'>1. Introduction</h1>
                        <p className='mt-3'>Scan2Alert collects e-mail addresses and other contact details of people who register at our
website and send us an e-mail. The information we collect is not shared with or sold to others
except under certain circumstances and which your use of the Service is deemed to provide to
us a valid consent to disclose the following:
In order to investigate, prevent, or take action regarding illegal activities, suspected fraud,
situations involving potential threats to the physical safety of any person, violations of
Scan2Alert’s terms of use, or as otherwise required by law.
We share information about our Members with third parties, such as advertisers or partners, for
marketing and promotional purposes. However, except as otherwise Scan2Alert does not rent,
sell, or share personal information about you with other companies.
Scan2Alert uses your information on a cumulative basis to help operate our websites and
enhance our websites design, improve our content, our services and usability. We may also use
the information we collect to occasionally notify you about important functionality changes to
the website, new Services, and special offers. We always use a secure connection when
collecting personal financial information from you. However, no data transmission over the
Internet can be guaranteed to be 100% secure.
Your Scan2Alert account is password-protected and you are free to create further users and
user groups to whom you shall assign Usernames and Passwords, so only you and those you
designate can access it and view the member information relevant to your account. Ultimately,
you are responsible for maintaining the secrecy of your passwords and any account
information.
By using any of Scan2Alert’s Services, or by dealing with a merchant using Scan2Alert’s
Services, you are agreeing to the terms of this Privacy Policy and, as applicable, the Scan2Alert
Terms of Service</p>
<div>
<h1 className='font-bold mt-4 mb-4'>2. Information from merchants</h1>
<p>If you are a merchant, your customers need to understand how you and we (Scan2Alert)
collects and processes their personal information. Accordingly, if you use the Services, you
agree to post an up-to-date and accurate privacy policy on your storefront that complies with
the laws applicable to your business. You also agree to obtain consent from your customers for
the use and access to their personal information by Scan2Alert and other third parties.
Additionally, if you are collecting any sensitive personal information from your customers
(including information relating to medical or health conditions, racial or ethnic origin, political
opinions, religious or philosophical beliefs, trade union membership or sexuality), you agree to
obtain affirmative, express consent from your customers for the use and access of sensitive
personal information by Scan2Alert and other third parties.</p>
<h1 className='font-bold mt-4 mb-4'>What information do we collect from merchants and why?
</h1>
<p>
    We collect your name, company name, address, email address, phone number(s) and payment
details (for example, your credit card information).
We use this information to provide you with our Services like; to confirm your identity, contact
you, provide you with advertising and marketing, and invoicing. We also use this information to
make sure that we comply with legal requirements.
We collect data about the Scan2Alert websites that you visit. We also collect data about how
and when you access your account and the Scan2Alert platform, including information about
the device and browser you use, your network connection, your IP address, and information
about how you browse through the Scan2Alert interface.
We use this information to give you access to and improve our Services; for ex: to make our
platform interface easier to use and we may use this information to provide you with advertising
or marketing.
Upon completing the subscription process for Scan2Alert, we collect your business address,
business type, business ID number, date of birth (if you are an individual business owner), bank
account information and government-issued identification information.
We use this information to provide you with Scan2Alert payments services, including fraud and
risk monitoring, and to comply with applicable legal and regulatory requirements.
We collect personal information about your customers that you share with us or that customers
provide while shopping or during checkout.
We use this information to provide you with our Services and so that you can process orders and
better serve your customers.
Where we need to verify your identity (if there are concerns around identity theft, or if you call
into support and we need to authenticate your account), we may request that you provide us
with government-issued identification information.
We use some of the personal information you provide us to conduct some level of automated
decision-making — for example, we use the certain personal information to help us screen
accounts for risk or fraud concerns.
We will also use personal information in other cases where you have given us your express
permission.

</p>
<h1 className='font-bold mt-4 mb-4'>When do we collect this information?</h1>
<p>We collect personal information when you sign up for our services when you access our
services or otherwise provide us with the information.
We also partner with third parties who provide us information about merchants or prospective
merchants, to help us screen out merchants associated with fraud.</p>
<h1 className='font-bold mt-4 mb-4'>When and why do we share this information with third parties?</h1>
<p>Scan2Alert works with a variety of third parties and service providers to help provide you with
our services and we may share personal information with them to support these efforts.</p>
<h1 className='font-bold mt-4 mb-4'>We may also share your information in the following circumstances:</h1>
<p>To prevent, investigate, or take action regarding illegal activities, suspected fraud, situations
involving potential threats to the physical safety of any person, violations of our Terms of Service
or any other agreement related to the Services, or as otherwise required by law.
To help us conduct marketing and/or advertising
To conform to legal requirements or to respond to lawful court orders, subpoenas, warrants, or
other requests by public authorities (includes meeting national security or law enforcement
requirements).
If the merchant whose store you visit or access directs us to transfer this information (for ex: if
they enable a third party app that accesses customer personal information).
Personal information may also be shared with a company that acquires our business, whether
through merger, acquisition, bankruptcy, dissolution, reorganization, or other similar
transaction or proceeding. If this happens, we will post a notice on our homepage.
Scan2Alert will always ask for your consent before sharing your personal information with third
parties for purposes other than those described in Section 7.</p>
</div>
                    </div>
                    <div>
                    <h1 className='font-bold mt-4 mb-4'>3. Information from customers</h1>
<p>What information do we collect from our merchant’s customers and why?
We collect our merchant’s customers’ name, email, shipping and billing address, payment
details, company name, phone number, IP address, information about orders you initiate,
information about the Scan2Alert supported merchant stores that you visit, and information
about the device and browser you use.
We use this information to provide our merchants with the services, including supporting and
processing orders, risk and fraud screening, authentication, and payments. We also use this
information to improve our services.
We additionally use this information to help customize and improve your experience when you
visit a merchant store by presenting to you goods and service that are more likely to be of
interest to you.
We use some of the personal information you provide us to conduct some level of automated
decision-making, we use certain personal information (like, IP addresses or payment
information) to automatically block certain potentially fraudulent transactions for a short period
of time.</p>
                    <h1 className='font-bold mt-4 mb-4'>When do we collect this information?</h1>
                    <p>We collect this information when you use or access a store that uses our services, such as
when you visit a merchant’s site, place an order or sign up for an account on a merchant’s site.
Additionally, we partner with third parties who provide us information about our merchant’s
customers, for example, to help us screen out merchants associated with fraud.</p>
                    </div>
                    <div>
                    <h1 className='font-bold mt-4 mb-4'>4. Information from partners
</h1>
<p>
    Partners are individuals or businesses that have agreed to the terms of the Scan2Alert Partner
Program to work with Scan2Alert to promote the platform by referring clients to Scan2Alert or
assisting in providing any other services for the platform.

</p>
<h1 className='font-bold mt-4 mb-4'>What information do we collect from partners and why?</h1>
<p>
    We collect your name, company name, website, twitter or other social media handles, phone
number(s), address, business type, email address, Payment Account Number and GST/HST
number.
We use this information to work with you, confirm your identity, contact you, and pay you and to
screen for risk, fraud, or other similar types of issues.
We collect data about the Scan2Alert websites that you visit. We also collect data about how
and when you access your account and the Scan2Alert platform, including information about
the device and browser you use, your network connection, your IP address, and information
about how you browse through the Scan2Alert interface.
We use this information to give you access to and improve our services and to make our
platform interface easier to use. We collect personal information about your customers that you
share with us or that they provide to us directly.
We will also use personal information in other cases where you have given us express
permission.
</p>
<h1 className='font-bold mt-4 mb-4'>When do we collect this information?</h1>
<p>
    We collect this information when you sign up for a partner account, when you sign up one of
your customers for our services, or when your customers sign up themselves. We also collect
any additional information that you might provide to us.
When and why do we share this information with third parties?
Scan2Alert works with a variety of third parties and service providers to help provide you with
our services and we may share personal information with them to support these efforts.
We may also share your information in the following circumstances:
To prevent, investigate, or take action regarding illegal activities, suspected fraud, situations
involving potential threats to the physical safety of any person, violations of our Terms of Service
or any other agreement related to the services, or as otherwise required by law.
To help us conduct marketing and/or advertising campaigns.
To conform to legal requirements or to respond to lawful court orders, subpoenas, warrants, or
other requests by public authorities (includes meeting national security or law enforcement
requirements).
Personal information may also be shared with a company that acquires our business, whether
through merger, acquisition, bankruptcy, dissolution, reorganization, or other similar
transaction or proceeding. If this happens, we will post a notice on our homepage.
Scan2Alert will always ask for your consent before sharing your personal information with third
parties for purposes other than those described in Section 7.

</p>
        <div>
            <h1 className='font-bold mt-4 mb-4'>5. Information from Scan2Alert website visitors and support users</h1>
            <p>
               What information do we collect and why?
As you visit or browse Scan2Alert websites, we collect information about the device and
browser you use, your network connection, your IP address, and information about the cookies
installed on your device. We also collect personal information submitted by you via any
messaging feature available from any of our websites.
We may also receive personal information when you make other requests to Scan2Alert via any
of our websites.
From telephone support users, we collect your phone number, call audio, and other personal
information you provide us during our call. Pursuant to our Terms of Service, we may request
additional documentation from you during our call to verify your identity.
From chat support users, we collect your name, email address, information about the device
and browser you use, your network connection, your IP address, chat transcript, and other
personal information you provide us during our chat. Pursuant to our Terms of Service, we may
request additional documentation from you during our chat to verify your identity.
From forum users, we collect your name, email address, website URL, and other personal
information you may post.
We use this information to verify your account, to provide and enhance our Services (including
supporting or servicing your account, if applicable), and answer any questions you may have. 
            </p>
            <h1 className='font-bold mt-4 mb-4'>When do we collect this information?</h1>
            <p>We collect this information when you visit the Scan2Alert websites, use services offered on our
websites or engage with us either by email, web form, instant message, phone, or post content
on or through our websites (including forums, blogs and via any Messaging Feature). We also
collect any additional information that you might provide to us.</p>
            </div> 
            <div>
                <h1 className='font-bold mt-4 mb-4'>6. Use of Cookies</h1>
                <p>This site uses cookies to enable you to navigate the site better as well as provide non-personally
identifiable information to third parties to assist in our market research and to provide targeted
marketing and information. Cookies also allow us to make our sites more responsive to your
needs, by delivering a better and more personalized experience to you. The cookies are typically
stored on your computer’s hard drive and are used by us to help track your clicks as you go
through the pages within any of our websites. In addition, we use cookies to help keep track of
support requests and to tell us whether you have previously visited one of our websites. This
allows registered users to avoid reentering information upon every new visit to our site. We do
not respond to Do Not Track (DNT) signals.
Third parties that have content embedded on our websites such as a social feature may set
cookies on a user’s browser and/or obtain information about the fact that a web browser visited
a specific website from a certain IP address. Third parties cannot collect any other personally
identifiable information from our websites unless you provide it to them directly.
Cookies may also be used to aid in our marketing efforts. For example, we have implemented
and use Display Advertising to allow for Google Analytics Remarketing. Third-party vendors,
including Google, show our ads on sites across the Internet. We and these third-party vendors,
including Google, use first-party cookies (such as the Google Analytics cookie) and third-party
cookies (such as the Double-click cookie) together to report how your ad impressions, other
uses of ad services, and interactions with these ad impressions and ad services are related to
visits to your site. We collect and use data from Google’s demographic reporting (such as age,
gender, and interests) to identify trends in the usage of our website. Such information is only
used internally by us. You can opt-out of Google Analytics for Display Advertising and customize
Google Display Network ads using Google Ads Settings can also use the Google Analytics optout browser plug-in to prevent their data from being collected and used by Google Analytics.
If you prefer not to accept cookies, you can set your browser to either disallow cookies all
together or have a browser alert you when a site is using a cookie. The exact method of disabling
cookies varies depending on the browser you are using; please consult the Help option in your
browser for specific directions. Please note that if you reject or block all cookies in your browser
settings, you will not be able to take full advantage of our services as some cookies are
necessary for the site to function properly.
</p>
                </div> 
       <div>
        
        <h1  className='font-bold mt-4 mb-4'>7. Third-party apps
</h1>
<p>
    Scan2Alert allows merchants to connect their stores with third-party applications to alter or
provide new functionalities in their store. Unless listed as “Made by Scan2Alert,” Scan2Alert is
not responsible for and has no control over how these apps function. Merchants ultimately can
control which apps they choose to use with their stores, and are responsible for making sure
that they do so in compliance with relevant privacy and data protection requirements.
</p>
        </div>  
        <div>
            <h1 className='font-bold mt-4 mb-4'>8. For how long do we retain your personal information?
</h1>
<p>
    In general, we keep your personal information throughout your relationship with us. For
merchants, this means we will keep your information as long as you maintain a store on our
platform. For partners, this means we will keep your information until you inform us that you
wish to terminate your partner relationship with us. For our merchants’ customers, we process
your information solely as a data processor on behalf of our merchants, and it is up to the
merchant to determine how long they will store your information in our systems.
Once you terminate your relationship with us, we generally will continue to store archived
copies of your personal information for legitimate business purposes and to comply with the
law, except when we receive a valid erasure request, or, if you are a merchant, you terminate
your account and your personal information is purged pursuant to our standard purge process.
We will continue to store anonymous or anonymized information, such as website visits,
without identifiers, in order to improve our services.
</p>
            </div>  
            <div>
                
                <h1 className='font-bold mt-4 mb-4'>9. What we don’t do with your personal information
</h1>
<p>We do not and will never share, disclose, sell, rent, or otherwise provide personal information to
other companies (other than to specific Scan2Alert merchants you are interacting with, or to
third-party apps or service providers being used by the merchants you are interacting with) for
the marketing of their own products or services.
If you are a merchant using Scan2Alert’s Services, we do not use the personal information we
collect from you or your customers to independently contact or market to your customers.
However, Scan2Alert may contact or market to your customers if we obtain their information
from another source.
</p>
                </div> 
                <div>
                    <h1 className='font-bold mt-4 mb-4'>10. How do we keep your personal information secure?</h1>
                    <p>
                        We follow industry standards on information security management to safeguard sensitive
information, such as financial information, intellectual property, employee details and any other
personal information entrusted to us. Our information security systems apply to people,
processes and information technology systems on a risk management basis.
We perform regular audits to ensure our handling of your credit card information aligns with
industry guidelines.
No method of transmission over the Internet, or method of electronic storage, is 100% secure.
Therefore, we cannot guarantee the absolute security of your personal information.
                    </p>
                    </div>  
                    <div>
                        <h1 className='font-bold mt-4 mb-4'>11. Residents of the European Economic Area (“EEA”)</h1>
                        <p>
Scan2Alert works with merchants and users around the world, including in the EEA. As part of
our service, we may transfer your personal information to other regions. If you are located in the
EEA, you have certain rights under European law with respect to your personal data, including
the right to request access to, correct, amend, delete, port to another service provider, or object
to certain uses of your personal data. If you are a merchant, a partner, visitors of Scan2Alert’s
websites, or a user of Scan2Alert’s support services and wish to exercise these rights, please
reach out to us using the contact information below. If you are a customer of a merchant who
uses Scan2Alert’s platform and wishes to exercise these rights, please contact the merchants
you interacted with directly, we serve as a processor on their behalf, and can only forward your
request to them to allow them to respond.
Additionally, if you are located in the EEA, please note that we are generally processing your
information in order to fulfill contracts we might have with you (for example if you make an order
through the Site), or otherwise to pursue our legitimate business interests listed above, unless
we are required by law to obtain your consent for a particular processing operation. In
particular, we process your personal data to pursue the following legitimate interests, either for
ourselves, our merchants, our partners, or other third parties (including our merchants’
customers):
To provide merchants and others with our services and applications.To prevent risk and fraud on
our platform.To provide communications, marketing, and advertising.To provide reporting and
analytics.To help merchants find and integrate with apps through our app store.To provide
troubleshooting, support services, or to answer questions.To test out features or additional
services and to improve our services, applications, and websites.
When we process personal information to pursue these legitimate interests, we do so where we
believe the nature of the processing, the information being processed, and the technical and
organizational measures employed to protect that information can help mitigate the risks to the
data subject.

                        </p>
                        </div>  
                        <div>
                            <h1 className='font-bold mt-4 mb-4'>12. How do we protect your personal information across borders?</h1>
                        <p>
                            We provide services to individuals and our technology processes data from users around the
world. Accordingly, Scan2Alert may transmit your personal information outside of the country,
state, or province in which you are located.
If you are located in the EEA or in Switzerland and believe that your personal information has
been used in a manner that is not consistent with the relevant privacy policies listed above,
please contact us using the information below.
In the course of offering our services, Scan2Alert uses a number of machine learning algorithms
and forms of automated decision-making. Most of these algorithms are not fully automated and
include some human intervention.

                        </p>
                        </div>
                        <div>
                            <h1 className='font-bold mt-4 mb-4'>13. Control over and access to your personal information</h1>
                            <p>
                                Scan2Alert understands that you have rights over your personal information, and takes
reasonable steps to allow you to access, correct, amend, delete, port, or limit the use of your
personal information. If you are a merchant or a partner, you can update many types of personal
information, such as payment or contact information, directly within your account settings. If
you are unable to change your personal information within your account settings or if you are
concerned about data collected as you visit Scan2Alert’s websites or use our support services,
please contact us to make the required changes. If you are a merchant’s customer and wish to
exercise these rights, please contact the merchants you interacted with directly, we serve as a
processor on their behalf, and can only forward your request to them to allow them to respond.
It’s important to remember that if you delete or limit the use of your personal information, the
services may not function properly.
If you have any questions about your personal information or this policy, please reach us at
info@scan2alert.in.
We may update this Privacy Policy from time to time in order to reflect, changes to our privacy
practices or for other operational, legal, or regulatory reasons. If we make material changes to
this Privacy Policy, we will give you notice of such changes by posting the revised policy on this
Website, and where appropriate, by other means. By continuing to use this Website or the
Support Service after these changes are posted, you agree to the revised policy.
                            </p>
                        </div>
                      </div>

                    <div className="text-center text-xs pt-4 border-t" style={{ color: '#0084C2' }}>
                        &copy; {new Date().getFullYear()} Car Registration Portal. All rights reserved.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
