import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const TermsAndConditions: React.FC = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      description:
        "By using our Car Registration Portal, you agree to comply with and be bound by these terms and conditions.",
    },
    {
      title: "User Responsibilities",
      description:
        "You must provide accurate, complete, and up-to-date information. Misleading info may lead to account suspension.",
    },
    {
      title: "Privacy & Data",
      description:
        "We keep your data safe and only use it for official processing. Read our Privacy Policy for details.",
    },
    {
      title: "Service Availability",
      description:
        "We aim for 24/7 access but may conduct maintenance or face outages without prior notice.",
    },
    {
      title: "Modifications",
      description:
        "We may update these terms. Continued use means you accept any new changes.",
    },
    {
      title: "Contact Us",
      description: "For queries, email us at support@carportal.com.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-100 overflow-x-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col space-y-8 transition-all duration-700 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold"
              style={{ color: "#0084C2" }}
            >
              Terms & Conditions
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Please read our terms and conditions carefully before using our
              services.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
                        {terms.map((term, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl text-white shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
                                style={{ backgroundColor: '#0084C2' }}
                            >
                                <div className="relative z-10 p-6 text-center">
                                    <h2 className="text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                                        {term.title}
                                    </h2>
                                    <p className="mt-2 text-sm group-hover:opacity-75 transition-opacity duration-300">
                                        {term.description}
                                    </p>
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                                    style={{ backgroundImage: 'url(/images/terms-bg.jpg)' }}
                                ></div>
                            </div>
                        ))}
                    </div> */}
          <div>
            <h1 className="mt-4 mb-4 font-bold">Terms and Conditions</h1>
            <p>
              This Terms of Service (“Agreement”, “Terms and Conditions” or
              “Terms”) is entered into between you (“Customer” or “You”) and
              Scan2Alert, Hyderabad, India, and is made effective on the date of
              electronic acceptance. Your continued use of the Scan2Alert site
              and/or the Services (as defined below) constitutes your
              acknowledgment and acceptance of these terms. The terms “we”, “us”
              or “our” shall refer to Scan2Alert, The terms “you”, “your” shall
              refer to any individual or entity who accepts this Agreement.
              Nothing in this Agreement shall be deemed to confer any
              third-party rights or benefits. This Agreement comes into effect
              when you register for using Scan2Alert services or signing an
              application for utilizing services of Scan2Alert. By registering
              or signing with Scan2Alert you signify your absolute and
              unconditional consent to all the provisions of this agreement in
              their entirety. This agreement constitutes a legally binding
              agreement between Licensee and Scan2Alert. You are advised to read
              this Agreement carefully. If you are not agreeable to any terms
              and conditions, you should not use this Service and notify the
              same to Scan2Alert.
            </p>
            <h1 className="mt-4 mb-4 font-bold">1. Eligibility Criteria</h1>
            <p>
              The Software license and Services are available only to, and may
              only be used by individuals who can form legally binding contracts
              under applicable law. Without limiting the foregoing, the Software
              and Services are not available to children (persons under the age
              of 18). If you are registering as a business entity, you represent
              that you have the eligibility to enter in to an agreement and the
              authority to bind the entity to this Agreement. Scan2Alert uses
              many techniques to verify the accuracy of the information you
              provide when you register on Scan2Alert Site. If for any reason,
              Scan2Alert, in its sole discretion, believes such information to
              be incorrect, it reserves the right, to revoke any and all
              licenses under this Agreement or to refuse to provide the Software
              license and Services under this Agreement to You.
            </p>
            <h1 className="mt-4 mb-4 font-bold">2. General Terms of Service</h1>
            <p>
              “Services” or “Service” is the merchant services provided by
              Scan2Alert, including hosting of the online store, site design,
              email services, marketing services, domain name registration, and
              other related services as may be offered from time to time.
              Software and/or Services provided by Scan2Alert on PAAS (platform
              as service) model.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">
              2.1 Delivery of the Services
            </h1>
            <p>
              The Services will be provided for a quarter from Effective Date.
              The contract will be deemed as auto renewed until either party
              terminates this Agreement by giving a written notice at least 90
              days prior to cancellation. Any fees that needs to be charged will
              be on a proportionate basis till the end of contract Weekdays,
              Holidays and Working Hours: The Services will be provided from
              Monday to Friday. The Service Provider teams will work during the
              IST business hours (10:00am to 6:00pm). The Service Provider team
              will follow the India public holidays. Upon activation of
              Licensee’s account and subject to the payment of applicable fees,
              Scan2Alert will provide certain hosting, support and other
              miscellaneous Services for the Software licensed by Licensee under
              this Agreement and Licensee’s Store during the term of this.
              Licensee’s Store shall be hosted on a Scan2Alert Server on which
              several merchants may share the resources and network capacity of
              that Scan2Alert Server. Store Design and Customization: At
              Licensee’s request, and subject to Scan2Alert acceptance of
              Licensee’s request and Licensee’s payment of applicable fees,
              Scan2Alert Licensee’s in accordance with Scan2Alert then current
              customization terms and conditions. This Statement of Work
              Pertains to providing software and services for PAAS (platform as
              a service) Model.
            </p>
            <h1 className="mt-4 mb-4 font-bold">2.2 Social Media Marketing</h1>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Set up of the account and pages on the selected platforms.
              </li>
              <li>
                Social media boosts showcasing activity or promotions, aligned
                with the media plan.
              </li>
              <li>
                Manage a product and create <strong>5 campaigns</strong>, each
                with <strong>5 line items</strong> or equivalent.
              </li>
              <li>
                During the contract period, the client has the flexibility to
                choose the <strong>start date</strong> for each campaign.
              </li>
            </ul>
            <p>
              The Service Provider will provide the Services from its office
              premises located at Hyderabad (India)
            </p>
          </div>
          <div>
            <h1 className="font-bold mt-4 mb-4 ">2.3 Exclusions</h1>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content for website to be provided by the client.</li>
              <li>
                Content for eDM and Newsletter will be developed based on the
                skeleton provided by the client. The team will provide
                suggestions for the content.
              </li>
              <li>
                Platform rental charges will apply for display, email, or any
                other marketing activity.
              </li>
              <li>
                The costs do not include:
                <li>Photography assignments</li>
                <li>Models</li>
                <li>Cost of producing films/animations</li>
                <li>Any paid form of advertising on social media</li>
                <li>Media buy</li>
                <li>Ad server charges</li>
              </li>
              <li>Image buying charges will be extra at actuals.</li>
              <li>Separate estimates will be raised for all other jobs.</li>
              <li>
                Translation charges will be extra at actuals for
                regional/foreign languages.
              </li>
              <li>
                If the volume of work exceeds the scope mentioned above, both
                parties will mutually review and revise the fees.
              </li>
            </ul>
            <h1 className="mt-4 mb-4 font-bold">2.4. Software Updates</h1>
            <p>
              From time to time, Scan2Alert may update the software associated
              with a service for many reasons, including but not limited to, fix
              bugs or problems in previous versions; and/or to enhance
              functionality or features. Scan2Alert makes no warranty that such
              updates will not affect your use of the Services or introduce new
              but unknown bugs into the software. Further, Scan2Alert shall not
              be responsible for the effect an update has on any code not
              provided by Scan2Alert and any modifications to such code to
              restore functionality shall be Customer’s sole responsibility and
              cost. Where support is provided by Scan2Alert, Scan2Alert will
              provide technical support for the most recent update or version of
              the Software associated with a Service. From time to time,
              Scan2Alert may provide support for an older version(s), however
              Scan2Alert reserves the right to suspend or terminate such support
              at any time, with or without notice.
            </p>
            <h1 className="mt-4 mb-4 font-bold">2.5 Use of Content</h1>
            <p>
              Some of the features of this Site or the Services found on this
              Site may allow Customer to view, post, publish, share, store or
              manage (a) ideas, opinions, recommendations, or advice (“User
              Submissions”), or (b) literary, artistic, musical or other
              content, including but not limited to, photos and videos (together
              with User Submissions, “User Content”). By providing User Content
              to Scan2Alert via any method (e.g., site submission, email, survey
              responses, etc.), You represent and warrant to Scan2Alert that (i)
              You have all necessary rights to distribute User Content via this
              Site or via the Services, either because You are the author of the
              User Content and have the right to distribute the same, or because
              You have the appropriate distribution rights, licenses, consents
              and/or permissions to use, in writing, from the copyright or other
              owner of the User Content, and (ii) You do not violate the rights
              of any third-party. The applicable provisions are not intended to
              and do not have the effect of transferring any ownership or
              licensed rights (including intellectual property rights) you may
              have in content posted to your hosted websites. You shall be
              solely responsible for any and all of your User Content or User
              Content that is submitted through your Account, and the
              consequences of, and requirements for, distributing it. You
              acknowledge and agree that: Your User Submissions are entirely
              voluntary; Your User Submissions do not establish a confidential
              relationship or obligate Scan2Alert to treat your User Submissions
              as confidential or secret; Scan2Alert has no obligation, either
              express or implied, to develop or use your User Submissions, and
              no compensation is due to You or to anyone else for any
              intentional or unintentional use of your User Submissions; and
              Scan2Alert may be working on the same or similar content, it may
              already know of such content from other sources, it may simply
              wish to develop this (or similar) content on its own, or it may
              have taken / will take some other action. Scan2Alert shall own
              exclusive rights (including all intellectual property and other
              proprietary rights) to any User Submissions provided to Scan2Alert
              by any method, and shall be entitled to the unrestricted use and
              dissemination of any User Submissions provided for any purpose,
              commercial or otherwise, without acknowledgment or compensation to
              you or to anyone else.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">3. Covenants</h1>
            <p>
              Licensee covenant that any products, services, or content
              published and distributed on Licensee’s Store and Licensee’s
              related activities shall not violate the Scan2Alert Acceptable Use
              Policy that is incorporated herein by reference and as it may be
              amended from time to time, nor shall they:
            </p>
            <ul className=" list-decimal pl-6 space-y-2">
              <li>i) Be false, inaccurate or misleading.</li>
              <li>
                ii) Be fraudulent or involve the sale of counterfeit or stolen
                items.
              </li>
              <li>
                iii) Infringe or misappropriate any third party’s copyright,
                patent, trademark, trade secret, or other proprietary rights or
                rights of publicity or privacy.
              </li>
              <li>
                iv) Violate any law, statute, ordinance or regulation
                (including, but not limited to, those governing:
                <ul className=" list-decimal pl-6 space-y-2">
                  <li>privacy,</li>
                  <li>publicity,</li>
                  <li>export control,</li>
                  <li>consumer protection,</li>
                  <li>unfair competition,</li>
                  <li>antidiscrimination, or</li>
                  <li>false advertising.</li>
                </ul>
              </li>
              <li>
                v) Be defamatory or libelous or unlawfully threatening or
                harassing, or advocate/promote/provide assistance for:
                <ul className=" list-decimal pl-6 space-y-2">
                  <li>
                    acts involving violence that may cause significant risk of
                    death or injury, or
                  </li>
                  <li>other unlawful activities.</li>
                </ul>
              </li>
              <li>vi) Be obscene or contain pornography.</li>
              <li>
                vii) Contain any viruses, Trojan horses, worms, time bombs,
                cancel bots, Easter eggs or other computer programming routines
                that may:
                <ul className=" list-decimal pl-6 space-y-2">
                  <li>damage,</li>
                  <li>detrimentally interfere with,</li>
                  <li>surreptitiously intercept or</li>
                  <li>expropriate any system, data or personal information.</li>
                </ul>
              </li>
              <li>
                viii) Involve the transmission of any unsolicited commercial or
                bulk email ("spamming"). Licensee shall not:
                <ul className=" list-decimal pl-6 space-y-2">
                  <li>
                    use Licensee’s account or Store as a return address for
                    unsolicited mail originating elsewhere, or
                  </li>
                  <li>participate in any such activities.</li>
                </ul>
              </li>
              <li>
                x) Be harmful or potentially harmful to the Scan2Alert server
                infrastructure, including (at Scan2Alert’s discretion):
                <ul className=" list-decimal pl-6 space-y-2">
                  <li>overloading the Scan2Alert technical infrastructure.</li>
                </ul>
              </li>
              <li>
                xi) Create liability for Scan2Alert and its subcontractors or:
                <ul className=" list-decimal pl-6 space-y-2">
                  <li>expose them to undue risk, or</li>
                  <li>
                    engage in any activities deemed harmful to Scan2Alert
                    affiliates, operations, reputation, or goodwill.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              Licensee shall not, directly or indirectly, offer, attempt to
              offer, trade or attempt to trade in any item, the dealing of which
              is prohibited or restricted in any manner under the provisions of
              any applicable law, rule, regulation or guideline for the time
              being in force or any item mentioned in ‘ Prohibited and
              Restricted Items list provided on the website. Licensee agree to
              display and adhere to terms of use or other user-type agreement,
              as well as a privacy policy, governing Licensee’s operation of
              Licensee’s Store and Licensee’s conduct with Licensee’s Store’s
              customers. Licensee’s failure to comply with the covenants set
              forth of this Agreement will amount to a breach of this Agreement
              and is cause for immediate suspension and/or termination.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">
              4. Fees and Payments and Taxes
            </h1>
            <p>
              4.1 You agree to pay Scan2Alert the fees according to the prices
              and terms listed on the website.
            </p>
            <p className="mt-3">
              4.2 Payment Terms: Scan2Alert will invoice you upon your agreement
              to pay for:
            </p>
            <ol className=" list-decimal pl-6 space-y-2 mt-4">
              <li>
                i) Non-refundable monthly subscription and other annual or
                one-time fees, in advance, including fees for the license of
                Software and Services to be rendered to you by or on behalf of
                Scan2Alert in the following month.
              </li>
              <li>
                ii) Transaction fees and all other fees designated in the Fees
                Policy to be paid in arrears based on the value of goods and
                services sold through Licensee’s Store during the previous
                calendar month, in accordance with the invoicing and payment
                requirements set forth in the Fees Policy.
              </li>
            </ol>
            <p className="mt-4">
              4.3 Taxes: All fees under this Agreement exclude all applicable
              sales, use, and other taxes and government charges, state or
              foreign, and you will be responsible for payment of all such
              taxes, fees, duties, and charges, and any related penalties and
              interest, arising from the payment of any and all fees under this
              Agreement.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">5. Warranty</h1>
            <p>
              Customer specifically acknowledges and agrees that your use of
              this site and the services found on this site shall be at your own
              risk and that this site and the services found on this site are
              provided “as is,” “as available” and “with all faults.”
              Scan2Alert, its officers, directors, employees and agents disclaim
              all warranties, statutory, express or implied, including, but not
              limited to, any implied warranties of title, merchantability,
              fitness for a particular purpose and non-infringement. Scan2Alert
              its officers, directors, employees and agents make no
              representations or warranties about (i) the ability of the
              software to perform without limitation or restriction in any given
              environment, (ii) the accuracy, completeness or content of this
              site, (iii) the accuracy, completeness or content of any sites
              linked (through hyperlinks, banner advertising or otherwise) to
              this site, and/or (iv) the services found at this site or any
              sites linked (through hyperlinks, banner advertising or otherwise)
              to this site, and Scan2Alert assumes no liability or
              responsibility for the same. In addition, you specifically
              acknowledge and agree that no oral or written information or
              advice provided by Scan2Alert, its officers, directors, employees
              or agents (including without limitation its call center or
              customer service representatives), whether directly or indirectly,
              will (i) constitute legal or financial advice or (ii) create a
              warranty of any kind with respect to this site or the services
              found at this site. Users should not rely on any such information
              or advice and you should consult an appropriate professional for
              specific advice tailored to your situation. The foregoing
              disclaimer of representations and warranties shall apply to the
              fullest extent permitted by law, and shall survive any termination
              or expiration of this agreement or your use of this site or the
              services found on this site.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">6.Limitation of Liability</h1>
            <p>
              Scan2Alert has no responsibility with respect to customer’s or end
              user’s use of the services and shall not be liable for
              consequential, incidental or special damages, including but not
              limited to, loss of use, business interruptions, loss of profits,
              lost revenue or punitive or exemplary damages, even if Scan2Alert
              is aware of the possibility thereof. In addition, you specifically
              acknowledge and agree that any cause of action arising out of or
              related to this site or the services found at this site must be
              commenced within one (1) year after the cause of action accrues,
              otherwise such cause of action shall be permanently barred. The
              foregoing limitation of liability shall apply to the fullest
              extent permitted by law, and shall survive any termination or
              expiration of this agreement or your use of this site or the
              services found on this site
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">7.Indemnity</h1>
            <p>
              Licensee agrees to indemnify and hold Scan2Alert, its suppliers,
              and service providers, and their officers, directors, agents and
              employees, harmless from any and all losses, costs, liabilities or
              expenses and harmless from any claim or demand, including
              reasonable attorneys fees, made by any third party due to or
              arising out of Licensee’s breach of the User Agreement or the
              documents it incorporates by reference, or Licensee’s violation of
              any law or the rights of a third party
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">8. Term and Termination</h1>
            <p>
              This Agreement shall be effective on the date hereof and shall
              continue, unless terminated in accordance with terms of this
              Agreement. Either Party may terminate this Agreement upon written
              notice from the other Party for inconvenience that is for any
              reason or for no reason. Any termination of this Agreement
              (howsoever occasioned) shall not affect any accrued rights or
              liabilities of either Party nor shall it affect the coming into
              force or the continuance in force of any provision hereof which is
              expressly or by implication intended to come into or continue in
              force on or after such termination.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">
              9.Relationship of the Parties
            </h1>
            <p>
              The Parties acknowledge and agree that the Services performed by
              the Service Provider and its employees or teams shall be as an
              independent Service Provider and that nothing in this Agreement
              shall be deemed to constitute a partnership, joint venture, agency
              relationship or otherwise between the parties.
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">10.Confidentiality</h1>
            <p>
              Neither Party will use, copy, adapt, alter or part with possession
              of any information of the other which is disclosed or otherwise
              comes into its possession under or in relation to this Agreement
              and which is of a confidential nature. This obligation will not
              apply to information which the recipient can prove was in its
              possession at the date it was received or obtained or which the
              recipient obtains from some other person with good legal title to
              it or which is in or comes into the public domain otherwise than
              through the default or negligence of the recipient or which is
              independently developed by or for the recipient
            </p>
          </div>
          <div>
            <h1 className="mt-4 mb-4 font-bold">11.Miscellaneous</h1>
            <p>
              The failure of either Party to enforce its rights under this
              Agreement at any time for any period shall not be construed as a
              waiver of such rights If any part, term or provision of this
              Agreement is held to be illegal or unenforceable neither the
              validity nor enforceability of the remainder of this Agreement
              shall be affected Neither Party shall assign or transfer all or
              any part of its rights under this Agreement without the consent of
              the other Party. This Agreement may not be amended for any other
              reason without the prior written agreement of both Parties.
              Neither Party shall be liable for failure to perform or delay in
              performing any obligation under this Agreement if the failure or
              delay is caused by any circumstances beyond its reasonable
              control, including but not limited to acts of god, war, civil
              commotion or industrial dispute. If such delay or failure
              continues for at least 7 days, the Party not affected by such
              delay or failure shall be entitled to terminate this Agreement by
              notice in writing to the other. Any disputes which cannot be
              resolved amicably will be resolved by the courts. Each Party will
              give serious consideration to a request by the other that any
              dispute should be referred to mediation.
            </p>
            <span className="font-bold text-sm">
              This Agreement shall be governed and construed by the laws of
              Republic of India enforceable in the courts of Hyderabad.
            </span>
          </div>

          <div
            className="text-center text-xs pt-4 border-t"
            style={{ color: "#0084C2" }}
          >
            &copy; {new Date().getFullYear()} Car Registration Portal. All
            rights reserved.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
