import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Marvonix — AI Automation Agency",
  description: "Learn how Marvonix collects, uses, and protects your personal information.",
};

const EFFECTIVE_DATE = "June 1, 2025";
const COMPANY = "Marvonix";
const COMPANY_FULL = "Marvonix AI Automation Agency";
const EMAIL = "support@marvonix.com";
const WEBSITE = "https://marvonix.com";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      `${COMPANY_FULL} ("${COMPANY}", "we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, with whom we share it, and the choices you have.`,
      `This Policy applies to all information collected through our website (${WEBSITE}), our services, sales, marketing, and any related interactions. By using our services, you agree to the collection and use of information in accordance with this Policy.`,
      `If you are located in the European Economic Area (EEA), the United Kingdom, or California, additional rights and obligations apply to you, as described in the relevant sections below.`,
    ],
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "2.1 Information You Provide Directly",
        items: [
          "Identity data: name, job title, company name",
          "Contact data: email address, phone number, mailing address",
          "Account credentials: username and password",
          "Payment and billing information (processed via PCI-compliant third-party processors; we do not store full card numbers)",
          "Project and business information you share during onboarding or service delivery",
          "Communications: emails, chat messages, support tickets, and feedback you send us",
        ],
      },
      {
        subtitle: "2.2 Information Collected Automatically",
        items: [
          "Device identifiers: IP address, browser type and version, operating system",
          "Usage data: pages visited, links clicked, time spent, referral URLs",
          "Cookie and tracking data (see Section 8 — Cookies)",
          "Log data: server logs, error reports, and performance metrics",
          "Location data: country or region inferred from IP address",
        ],
      },
      {
        subtitle: "2.3 Information from Third Parties",
        items: [
          "Business information from publicly available sources (e.g., LinkedIn, company websites)",
          "Analytics data from providers such as Google Analytics",
          "Marketing data from advertising platforms where you interacted with our ads",
          "Payment verification data from payment processors",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      `We use the information we collect for the following purposes, each grounded in a lawful basis under applicable law:`,
    ],
    list: [
      { item: "To provide and deliver our services", detail: "Including project setup, automation implementation, and ongoing support. Lawful basis: contract performance." },
      { item: "To process payments and prevent fraud", detail: "Verifying transactions, detecting suspicious activity, and complying with financial regulations. Lawful basis: contract performance and legal obligation." },
      { item: "To communicate with you", detail: "Responding to inquiries, sending project updates, invoices, and service notifications. Lawful basis: contract performance and legitimate interest." },
      { item: "To send marketing communications", detail: "Newsletters, product updates, and promotional offers — only where you have consented or we have a legitimate interest and you have not opted out. Lawful basis: consent or legitimate interest." },
      { item: "To improve our services", detail: "Analyzing usage patterns, conducting research, and developing new features. Lawful basis: legitimate interest." },
      { item: "To comply with legal obligations", detail: "Retaining records as required by tax, accounting, and other regulations. Lawful basis: legal obligation." },
      { item: "To enforce our Terms", detail: "Investigating and preventing violations of our Terms & Conditions and protecting our legal rights. Lawful basis: legitimate interest." },
    ],
  },
  {
    id: "sharing",
    title: "4. How We Share Your Information",
    content: [
      `We do not sell, rent, or trade your personal information. We may share your information in the following limited circumstances:`,
    ],
    bullets: [
      `Service providers and sub-processors: We engage trusted third parties to perform functions on our behalf, such as cloud hosting (e.g., AWS, Vercel), payment processing (e.g., Stripe), email delivery (e.g., Postmark), analytics (e.g., Google Analytics), and customer support tools. These parties are contractually bound to protect your data and use it only as instructed.`,
      `Business transfers: If ${COMPANY} is involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information is transferred and becomes subject to a different privacy policy.`,
      `Legal compliance: We may disclose your information if required to do so by law, subpoena, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.`,
      `With your consent: We may share your information with third parties when you have given us explicit consent to do so.`,
      `Aggregated or anonymized data: We may share aggregated or de-identified information that cannot reasonably be used to identify you.`,
    ],
  },
  {
    id: "retention",
    title: "5. Data Retention",
    content: [
      `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law.`,
      `Specifically: account information is retained for the duration of your relationship with us plus 3 years; payment records are retained for 7 years for tax and accounting purposes; project files and deliverables are retained for 2 years after project completion unless otherwise agreed; and marketing consent records are retained until withdrawn plus 3 years.`,
      `When we no longer have a legitimate need to process your information, we will either delete it or anonymize it. If deletion is not immediately possible (e.g., because data is stored in backup archives), we will securely store and isolate it from further processing until deletion is possible.`,
    ],
  },
  {
    id: "security",
    title: "6. Data Security",
    content: [
      `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices include:`,
    ],
    bullets: [
      `Encryption in transit (TLS 1.2+) and at rest (AES-256) for sensitive data`,
      `Access controls based on the principle of least privilege`,
      `Regular security assessments and vulnerability testing`,
      `Employee security training and confidentiality obligations`,
      `Incident response procedures with breach notification within 72 hours to supervisory authorities where required`,
      `Secure third-party vendor assessments before onboarding`,
    ],
    content2: [
      `Despite our best efforts, no method of transmission over the internet or electronic storage is 100% secure. In the event of a data breach that affects your rights and freedoms, we will notify you as required by applicable law.`,
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      `Depending on your location, you may have the following rights regarding your personal information:`,
    ],
    list: [
      { item: "Right of access", detail: "Request a copy of the personal information we hold about you." },
      { item: "Right to rectification", detail: "Request correction of inaccurate or incomplete information." },
      { item: "Right to erasure ('right to be forgotten')", detail: "Request deletion of your personal information, subject to certain exceptions." },
      { item: "Right to restriction", detail: "Request that we limit how we use your information in certain circumstances." },
      { item: "Right to data portability", detail: "Receive your information in a structured, machine-readable format." },
      { item: "Right to object", detail: "Object to processing based on legitimate interests or for direct marketing purposes." },
      { item: "Right to withdraw consent", detail: "Where processing is based on consent, withdraw it at any time without affecting prior processing." },
      { item: "Right to non-discrimination (California)", detail: "California residents have the right not to receive discriminatory treatment for exercising their CCPA rights." },
    ],
    content2: [
      `To exercise any of these rights, please contact us at ${EMAIL}. We will respond to verified requests within 30 days (or as required by applicable law). We may ask you to verify your identity before processing your request.`,
      `If you are located in the EEA or UK and are unhappy with how we have handled your request, you have the right to lodge a complaint with your local data protection authority.`,
    ],
  },
  {
    id: "cookies",
    title: "8. Cookies and Tracking Technologies",
    content: [
      `We use cookies and similar tracking technologies (web beacons, pixels, local storage) to collect and store information when you visit our website. Cookies are small text files placed on your device.`,
    ],
    subsections: [
      {
        subtitle: "Types of cookies we use:",
        items: [
          "Strictly necessary cookies: Required for the website to function. Cannot be disabled.",
          "Performance cookies: Collect anonymous data on how visitors use our site (e.g., Google Analytics).",
          "Functional cookies: Remember your preferences such as language or region.",
          "Marketing cookies: Track your activity to deliver relevant advertising. Only set with your consent.",
        ],
      },
    ],
    content2: [
      `You can control cookies through your browser settings and, where applicable, our cookie consent tool. Disabling certain cookies may affect the functionality of our website. For more information, visit www.allaboutcookies.org.`,
    ],
  },
  {
    id: "international",
    title: "9. International Transfers",
    content: [
      `Our operations are global and your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws than your country of residence.`,
      `Where we transfer personal data from the EEA or UK to countries not deemed adequate by the European Commission, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission, or other lawful transfer mechanisms.`,
      `You may request a copy of the safeguards we use for international transfers by contacting us at ${EMAIL}.`,
    ],
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: [
      `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have inadvertently collected personal information from a child under 16, we will take steps to delete that information promptly.`,
      `If you believe we have collected information from a child under 16, please contact us immediately at ${EMAIL}.`,
    ],
  },
  {
    id: "third-party",
    title: "11. Third-Party Links and Services",
    content: [
      `Our website and services may contain links to third-party websites, plugins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy practices.`,
      `We encourage you to review the privacy policy of every website you visit. This Privacy Policy applies only to information collected by ${COMPANY}.`,
    ],
  },
  {
    id: "california",
    title: "12. California Privacy Rights (CCPA / CPRA)",
    content: [
      `If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), grants you additional rights. In the past 12 months, we have collected the categories of personal information described in Section 2.`,
      `We do not sell personal information as defined under the CCPA. We do not share personal information for cross-context behavioral advertising without your consent.`,
      `California residents may designate an authorized agent to submit requests on their behalf. We will require the authorized agent to provide proof of authorization and may require you to verify your identity directly with us.`,
      `To submit a California privacy rights request, contact us at ${EMAIL} with "California Privacy Request" in the subject line.`,
    ],
  },
  {
    id: "changes",
    title: "13. Changes to This Policy",
    content: [
      `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The updated Policy will be posted on our website with a new "Effective Date."`,
      `For material changes, we will provide more prominent notice, such as an email notification to registered users or a banner on our website. Your continued use of our services after the effective date of any changes constitutes your acceptance of the updated Policy.`,
      `We encourage you to review this Policy periodically to stay informed about how we protect your information.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <div className="border-b border-border">
          <div className="max-w-[860px] mx-auto px-5 md:px-10 py-16 md:py-20">
            <p className="marvonix-label mb-4">LEGAL</p>
            <h1 className="text-[40px] md:text-[56px] font-semibold tracking-[-2px] text-foreground leading-[1.1] font-[family-name:var(--font-outfit)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-[16px] leading-7 font-[family-name:var(--font-outfit)] max-w-[560px]">
              We take your privacy seriously. This Policy describes what personal information we collect, why we collect it, and how you can exercise your rights.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-[13px] text-muted-foreground font-[family-name:var(--font-outfit)]">
              <span>Effective date: <strong className="text-foreground">{EFFECTIVE_DATE}</strong></span>
              <span className="text-border">·</span>
              <span>Questions: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[860px] mx-auto px-5 md:px-10 py-14 md:py-20">
          {/* Table of Contents */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-14">
            <p className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest mb-4 font-[family-name:var(--font-outfit)]">
              Table of Contents
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[14px] text-muted-foreground hover:text-primary transition-colors font-[family-name:var(--font-outfit)]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-14">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-[22px] font-semibold text-foreground font-[family-name:var(--font-outfit)] mb-5 pb-3 border-b border-border">
                  {s.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {s.content?.map((para, i) => (
                    <p key={i} className="text-[15px] text-muted-foreground leading-[1.8] font-[family-name:var(--font-outfit)]">{para}</p>
                  ))}

                  {s.subsections?.map((sub, si) => (
                    <div key={si} className="mt-1">
                      <p className="text-[14px] font-semibold text-foreground font-[family-name:var(--font-outfit)] mb-2">{sub.subtitle}</p>
                      <ul className="flex flex-col gap-1.5 pl-4">
                        {sub.items.map((item, ii) => (
                          <li key={ii} className="text-[14px] text-muted-foreground leading-[1.7] font-[family-name:var(--font-outfit)] list-disc">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {s.list?.map((entry, li) => (
                    <div key={li} className="flex gap-3 pl-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[10px] flex-shrink-0" />
                      <div>
                        <span className="text-[14px] font-semibold text-foreground font-[family-name:var(--font-outfit)]">{entry.item}: </span>
                        <span className="text-[14px] text-muted-foreground leading-[1.7] font-[family-name:var(--font-outfit)]">{entry.detail}</span>
                      </div>
                    </div>
                  ))}

                  {s.bullets?.map((b, bi) => (
                    <div key={bi} className="flex gap-3 pl-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-border mt-[10px] flex-shrink-0" />
                      <p className="text-[14px] text-muted-foreground leading-[1.7] font-[family-name:var(--font-outfit)]">{b}</p>
                    </div>
                  ))}

                  {s.content2?.map((para, i) => (
                    <p key={i} className="text-[15px] text-muted-foreground leading-[1.8] font-[family-name:var(--font-outfit)]">{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-card border border-border rounded-2xl p-8">
            <h2 className="text-[20px] font-semibold text-foreground font-[family-name:var(--font-outfit)] mb-2">
              Contact Our Privacy Team
            </h2>
            <p className="text-[14px] text-muted-foreground leading-[1.7] font-[family-name:var(--font-outfit)] mb-4">
              If you have questions, concerns, or wish to exercise your rights, please contact us. We aim to respond within 30 days.
            </p>
            <div className="flex flex-col gap-1.5 text-[14px] font-[family-name:var(--font-outfit)]">
              <span className="text-muted-foreground">Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></span>
              <span className="text-muted-foreground">Website: <a href={WEBSITE} className="text-primary hover:underline">{WEBSITE}</a></span>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
