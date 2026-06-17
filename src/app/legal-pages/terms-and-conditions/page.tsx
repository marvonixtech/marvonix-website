import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Marvonix — AI Automation Agency",
  description: "Read the Terms & Conditions governing your use of Marvonix services.",
};

const EFFECTIVE_DATE = "June 1, 2025";
const COMPANY = "Marvonix";
const COMPANY_FULL = "Marvonix AI Automation Agency";
const EMAIL = "support@marvonix.com";
const WEBSITE = "https://marvonix.com";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      `By accessing or using the services, website, or any software provided by ${COMPANY_FULL} ("${COMPANY}", "we", "us", or "our"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to all of the Terms, do not access or use our services.`,
      `These Terms apply to all visitors, users, clients, and others who access or use our services. By creating an account, placing an order, or otherwise engaging with ${COMPANY}, you represent that you are at least 18 years of age and have the legal authority to enter into these Terms on behalf of yourself or the entity you represent.`,
      `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modification constitutes your acceptance of the revised Terms.`,
    ],
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: [
      `${COMPANY} provides AI-powered automation services including, but not limited to: lead generation automation, workflow design and implementation, AI chatbot development, data processing pipelines, custom system integrations, and ongoing support and maintenance (collectively, the "Services").`,
      `The specific scope, deliverables, timelines, and fees for each engagement are defined in a separate Statement of Work ("SOW") or Service Agreement signed between ${COMPANY} and the client. In the event of conflict between these Terms and a signed SOW, the SOW shall control with respect to the specific engagement.`,
      `We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time. We will provide reasonable notice of material changes to ongoing engagements.`,
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts and Registration",
    content: [
      `To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.`,
      `You are responsible for safeguarding your account credentials and for all activity that occurs under your account. You must notify us immediately at ${EMAIL} upon becoming aware of any unauthorized access or use of your account.`,
      `${COMPANY} reserves the right to terminate or suspend accounts that violate these Terms, engage in fraudulent activity, or remain inactive for an extended period, with or without prior notice.`,
    ],
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content: [
      `All fees are specified in the applicable SOW or invoice. Unless otherwise agreed in writing, payment is due within 14 days of the invoice date. Overdue amounts accrue interest at 1.5% per month (or the maximum rate permitted by law, whichever is lower).`,
      `${COMPANY} may require a deposit or upfront payment before commencing work. Deposits are non-refundable unless we fail to commence the agreed services within the timeframe specified in the SOW.`,
      `All prices are exclusive of applicable taxes, duties, and levies. You are responsible for all taxes associated with your purchase, excluding taxes on our net income.`,
      `In the event of a payment dispute, you must notify us in writing within 10 business days of the invoice date. Undisputed portions of invoices remain due and payable.`,
    ],
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    content: [
      `Upon receipt of full payment for a project, ${COMPANY} assigns to you all right, title, and interest in the custom deliverables specifically created for you under the applicable SOW, excluding any Pre-Existing IP (as defined below).`,
      `"Pre-Existing IP" means any intellectual property owned or developed by ${COMPANY} prior to or independently of any client engagement, including our proprietary frameworks, templates, automation libraries, internal tools, methodologies, and know-how. ${COMPANY} retains all rights in Pre-Existing IP. To the extent Pre-Existing IP is incorporated into deliverables, ${COMPANY} grants you a non-exclusive, perpetual, royalty-free license to use such Pre-Existing IP solely as part of the deliverables.`,
      `The ${COMPANY} name, logo, brand marks, and all website content, including text, graphics, and software, are the exclusive property of ${COMPANY} and may not be used, reproduced, or distributed without our prior written consent.`,
    ],
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    content: [
      `Each party ("Receiving Party") agrees to keep confidential all non-public information disclosed by the other party ("Disclosing Party") that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure ("Confidential Information").`,
      `The Receiving Party shall: (a) use Confidential Information solely to perform its obligations or exercise its rights under these Terms; (b) protect Confidential Information with at least the same degree of care it uses for its own confidential information, but no less than reasonable care; and (c) limit disclosure to employees, contractors, and advisors with a need to know and who are bound by confidentiality obligations at least as protective as these Terms.`,
      `Confidentiality obligations do not apply to information that: (i) is or becomes publicly known without breach of this agreement; (ii) was already known to the Receiving Party prior to disclosure; (iii) is independently developed by the Receiving Party without use of Confidential Information; or (iv) is required to be disclosed by law or court order, provided the Receiving Party gives prompt written notice to the Disclosing Party.`,
    ],
  },
  {
    id: "data",
    title: "7. Data and Privacy",
    content: [
      `Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.`,
      `You retain ownership of all data, content, and materials you provide to us ("Client Data"). You grant ${COMPANY} a limited, non-exclusive license to access, process, and use Client Data solely to provide the Services.`,
      `We implement industry-standard technical and organizational measures to protect Client Data against unauthorized access, loss, or disclosure. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
      `We will process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable. Details of our data processing activities are set forth in a Data Processing Agreement ("DPA"), available upon request.`,
    ],
  },
  {
    id: "acceptable-use",
    title: "8. Acceptable Use",
    content: [
      `You agree not to use our Services to: (a) violate any applicable law, regulation, or third-party rights; (b) transmit any malware, viruses, or harmful code; (c) engage in spamming, phishing, or deceptive practices; (d) infringe any intellectual property right; (e) collect or harvest personal data without authorization; or (f) interfere with or disrupt the integrity or performance of our Services.`,
      `You may not reverse engineer, decompile, disassemble, or attempt to derive the source code of any software component of our Services. You may not sublicense, resell, or transfer access to our Services to any third party without our prior written consent.`,
      `${COMPANY} reserves the right to investigate suspected violations of these Terms and to take appropriate action, including immediate termination of Services and reporting to law enforcement authorities.`,
    ],
  },
  {
    id: "warranties",
    title: "9. Warranties and Disclaimers",
    content: [
      `${COMPANY} warrants that: (a) it has the authority to enter into these Terms; (b) the Services will be performed in a professional and workmanlike manner consistent with industry standards; and (c) the Services will not knowingly infringe any third-party intellectual property rights.`,
      `EXCEPT AS EXPRESSLY SET FORTH ABOVE, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ${COMPANY.toUpperCase()} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
      `We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components. You acknowledge that AI-generated outputs may contain inaccuracies and should be reviewed by qualified personnel before being relied upon for important decisions.`,
    ],
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: [
      `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ${COMPANY.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
      `${COMPANY}'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL FEES PAID BY YOU TO ${COMPANY.toUpperCase()} IN THE THREE (3) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD $100).`,
      `Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations may not apply to you in full.`,
    ],
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    content: [
      `You agree to indemnify, defend, and hold harmless ${COMPANY}, its officers, directors, employees, and agents from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use or misuse of the Services; (b) your violation of these Terms; (c) your violation of any third-party rights, including intellectual property rights; or (d) any Client Data you provide that violates applicable law or third-party rights.`,
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    content: [
      `Either party may terminate an engagement for convenience upon 30 days' written notice, unless a different notice period is specified in the applicable SOW. Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to cure such breach within 14 days of receiving written notice.`,
      `Upon termination: (a) you shall pay all fees for Services rendered up to the termination date; (b) each party shall promptly return or destroy the other party's Confidential Information; and (c) licenses granted under these Terms shall terminate, except for licenses in fully paid-up deliverables.`,
      `Sections relating to payment, intellectual property, confidentiality, warranties, liability, indemnification, and dispute resolution shall survive termination of these Terms.`,
    ],
  },
  {
    id: "governing-law",
    title: "13. Governing Law and Dispute Resolution",
    content: [
      `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ${COMPANY} is registered, without regard to its conflict of law principles.`,
      `Any dispute, controversy, or claim arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties for a period of 30 days. If unresolved, disputes shall be submitted to binding arbitration in accordance with the rules of a recognized arbitration institution agreed upon by the parties.`,
      `Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent irreparable harm pending arbitration.`,
    ],
  },
  {
    id: "general",
    title: "14. General Provisions",
    content: [
      `These Terms, together with any applicable SOW, constitute the entire agreement between you and ${COMPANY} with respect to the subject matter hereof and supersede all prior and contemporaneous agreements.`,
      `If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining Terms remain in full force and effect.`,
      `The failure of ${COMPANY} to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. A waiver of any breach shall not be deemed a waiver of any subsequent breach.`,
      `You may not assign or transfer your rights or obligations under these Terms without our prior written consent. ${COMPANY} may assign these Terms without restriction.`,
      `Notices under these Terms shall be in writing and delivered to ${EMAIL} (for ${COMPANY}) or to the email address associated with your account (for you).`,
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <div className="border-b border-border">
          <div className="max-w-[860px] mx-auto px-5 md:px-10 py-16 md:py-20">
            <p className="marvonix-label mb-4">LEGAL</p>
            <h1 className="text-[40px] md:text-[56px] font-semibold tracking-[-2px] text-foreground leading-[1.1] font-[family-name:var(--font-outfit)] mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-muted-foreground text-[16px] leading-7 font-[family-name:var(--font-outfit)] max-w-[560px]">
              Please read these Terms carefully before using our services. They govern your relationship with {COMPANY} and outline our mutual rights and obligations.
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
                  {s.content.map((para, i) => (
                    <p key={i} className="text-[15px] text-muted-foreground leading-[1.8] font-[family-name:var(--font-outfit)]">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-card border border-border rounded-2xl p-8">
            <h2 className="text-[20px] font-semibold text-foreground font-[family-name:var(--font-outfit)] mb-2">
              Contact Us
            </h2>
            <p className="text-[14px] text-muted-foreground leading-[1.7] font-[family-name:var(--font-outfit)] mb-4">
              If you have any questions about these Terms, please reach out to our legal team.
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
