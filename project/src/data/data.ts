export interface ServiceData {
  slug: string;
  category: string;
  headline: string;
  subheadline: string;
  overview: {
    para1: string;
    para2: string;
  };
  benefits: {
    title: string;
    detail: string;
  }[];
  processSteps: {
    title: string;
    detail: string;
  }[];
  documentsRequired: {
    category: string;
    documents: string[];
  }[];
  whyChoosePAJ: {
    intro: string;
    points: {
      title: string;
      detail: string;
    }[];
  };
  cta: {
    headline: string;
    subline: string;
    buttonText: string;
  };
}

export const servicesData: ServiceData[] = [
  // ─────────────────────────────────────────────
  // 2. Public Limited Company
  // ─────────────────────────────────────────────
   {
    slug: "private-limited-company",
      category: "Start My Business",
   
  

    headline:
      "Register Your Private Limited Company — Fast, Simple & Fully Compliant",

    subheadline:
      "India's most preferred business structure for startups, entrepreneurs, and growing businesses.",

    overview: {
      para1:
        "A Private Limited Company (Pvt Ltd) is incorporated under the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs. It requires a minimum of 2 and a maximum of 200 shareholders, with restricted share transferability. It is a distinct legal entity from its owners — capable of owning assets, entering contracts, and operating independently.",

      para2:
        "The words 'Private Limited' or 'Pvt. Ltd.' must appear in the company name. This structure is the most popular choice for businesses seeking formal credibility, external investment, and long-term scalability.",
    },

    benefits: [
      {
        title: "Limited Liability",
        detail:
          "Shareholders' personal assets are fully protected. Liability is restricted to the extent of their shareholding.",
      },
      {
        title: "Separate Legal Entity",
        detail:
          "The company exists independently of its founders and can own property, open bank accounts, and enter agreements in its own name.",
      },
      {
        title: "Perpetual Succession",
        detail:
          "The company continues to exist regardless of changes in ownership or the death of a shareholder.",
      },
      {
        title: "Ease of Fundraising",
        detail:
          "Widely preferred by venture capitalists, angel investors, and banks for raising seed and growth capital.",
      },
      {
        title: "Credibility & Trust",
        detail:
          "A registered Pvt Ltd company inspires far greater trust among clients, vendors, and partners.",
      },
      {
        title: "Tax Advantages",
        detail:
          "Eligible for tax incentives including the Startup India deduction under Section 80-IAC of the Income Tax Act.",
      },
    ],

    processSteps: [
      {
        title: "Obtain Digital Signature Certificate (DSC)",
        detail:
          "All proposed directors must obtain a Class 3 DSC from a certified authority. This is mandatory for signing electronic forms on the MCA portal.",
      },
      {
        title: "Apply for Director Identification Number (DIN)",
        detail:
          "Every director must have a DIN, which can be applied for through the SPICe+ form during incorporation or separately via Form DIR-3.",
      },
      {
        title: "Name Reservation via RUN",
        detail:
          "Apply for company name approval through the MCA portal. The name must be unique and comply with the Companies Act naming guidelines.",
      },
      {
        title: "Draft MOA & AOA",
        detail:
          "The Memorandum of Association defines the company's objectives. The Articles of Association governs internal management. We draft both documents for you.",
      },
      {
        title: "File SPICe+ Form",
        detail:
          "The SPICe+ form is filed on the MCA portal covering name reservation, DIN allotment, PAN/TAN, and optional GST and EPFO registration — all in one.",
      },
      {
        title: "Receive Certificate of Incorporation",
        detail:
          "The Registrar of Companies issues the Certificate of Incorporation along with the CIN, PAN, and TAN. Your company is now officially registered.",
      },
    ],

    documentsRequired: [
      {
        category: "For Directors & Shareholders",
        documents: [
          "PAN Card of all directors and shareholders",
          "Aadhaar Card / Passport / Voter ID",
          "Latest bank statement or utility bill (not older than 2 months)",
          "Passport-size photographs",
          "Email IDs and mobile numbers",
        ],
      },
      {
        category: "For Registered Office",
        documents: [
          "Electricity bill / property tax receipt",
          "No Objection Certificate (NOC) from property owner",
          "Rent agreement (if premises are rented)",
        ],
      },
    ],

    whyChoosePAJ: {
      intro:
        "P.A.J & Co. is a firm of experienced Company Secretaries and compliance professionals dedicated to making your registration smooth, fast, and fully compliant.",

      points: [
        {
          title: "Expert Team",
          detail:
            "CAs, CSs, and legal advisors with deep knowledge of MCA, SEBI, and RBI regulations.",
        },
        {
          title: "End-to-End Support",
          detail:
            "From name reservation to Certificate of Incorporation, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail:
            "No hidden charges. Clear, upfront pricing with milestone-based updates.",
        },
        {
          title: "Fast Turnaround",
          detail:
            "Digital processes ensure the fastest registration timelines without compromising compliance.",
        },
        {
          title: "Post-Registration Guidance",
          detail:
            "GST, payroll, ROC filings, and annual compliances — we stay with you.",
        },
      ],
    },

    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your Private Limited Company registered seamlessly with expert guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },
  {
    slug: "public-limited-company",
    category: "Start My Business",
    headline: "Public Limited Company Registration — Built for Scale",
    subheadline:
      "The right structure for enterprises ready to raise public capital, list on stock exchanges, and grow without limits.",
    overview: {
      para1:
        "A Public Limited Company is incorporated under the Companies Act, 2013 and requires a minimum of 7 shareholders and 3 directors, with no upper limit on shareholders. Unlike a Private Limited Company, shares can be freely transferred and offered to the general public.",
      para2:
        "Companies intending to list on BSE or NSE must be incorporated as a Public Limited Company. The name must end with 'Limited' and is subject to more stringent regulatory oversight including SEBI compliance for listed companies.",
    },
    benefits: [
      {
        title: "Access to Public Capital",
        detail:
          "Raise funds by issuing shares and debentures to the general public through IPOs, FPOs, and rights issues.",
      },
      {
        title: "Stock Exchange Listing",
        detail:
          "Eligible to list on BSE, NSE, and other recognised exchanges, enhancing liquidity and brand visibility.",
      },
      {
        title: "Limited Liability",
        detail:
          "Shareholders' liability is limited to the face value of their shares.",
      },
      {
        title: "Separate Legal Entity",
        detail:
          "Exists independently of its shareholders and directors, ensuring continuity of operations.",
      },
      {
        title: "Perpetual Existence",
        detail:
          "Company continues despite changes in ownership or resignation of directors.",
      },
      {
        title: "Enhanced Credibility",
        detail:
          "Mandatory public disclosures build trust among customers, lenders, and global investors.",
      },
      {
        title: "Large-Scale Growth",
        detail:
          "Ideal for businesses with ambitious expansion plans requiring large capital investments.",
      },
    ],
    processSteps: [
      {
        title: "Obtain DSC for All Directors",
        detail:
          "All 3 or more proposed directors must obtain a Class 3 Digital Signature Certificate for filing forms on the MCA portal.",
      },
      {
        title: "Apply for DIN",
        detail:
          "Director Identification Number (DIN) is required for every proposed director. Applied for via SPICe+ or Form DIR-3.",
      },
      {
        title: "Name Reservation",
        detail:
          "Apply through the RUN service on MCA portal. The name must end with 'Limited' and must be unique and non-misleading.",
      },
      {
        title: "Draft MOA & AOA",
        detail:
          "Comprehensive Memorandum and Articles of Association covering share capital, investor rights, and board governance are drafted.",
      },
      {
        title: "File SPICe+ Form",
        detail:
          "File SPICe+ on MCA21 with all required attachments including MOA, AOA, director consents, and address proof.",
      },
      {
        title: "Certificate of Incorporation",
        detail:
          "The ROC issues the Certificate of Incorporation. The company becomes a legal entity with its CIN, PAN, and TAN.",
      },
      {
        title: "Post-Incorporation Compliances",
        detail:
          "Hold the first board meeting within 30 days, issue share certificates, open a bank account, and appoint a Company Secretary where required.",
      },
    ],
    documentsRequired: [
      {
        category: "For Directors & Shareholders",
        documents: [
          "PAN Card of all directors and shareholders",
          "Aadhaar Card / Passport / Voter ID",
          "Address proof (bank statement or utility bill — not older than 2 months)",
          "Passport-size photographs",
          "Email IDs and phone numbers",
        ],
      },
      {
        category: "For Registered Office",
        documents: [
          "Ownership proof or rental agreement",
          "Utility bill of the registered office",
          "NOC from the property owner",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. brings deep regulatory expertise to every step of Public Limited Company registration — from pre-incorporation planning to ROC filings.",
      points: [
        {
          title: "Expert Team",
          detail:
            "Experienced CSs and CAs with thorough knowledge of MCA, SEBI, and Companies Act requirements.",
        },
        {
          title: "End-to-End Support",
          detail:
            "We manage name approval, MOA/AOA drafting, SPICe+ filing, and post-incorporation compliances.",
        },
        {
          title: "Transparent Pricing",
          detail:
            "No surprises. You receive a clear engagement letter before we begin.",
        },
        {
          title: "Fast Turnaround",
          detail:
            "Efficient digital filing ensures minimum delays at every regulatory stage.",
        },
        {
          title: "Post-Registration Compliance",
          detail:
            "ROC filings, board meeting support, statutory registers, and annual returns — all handled.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your Public Limited Company registered with expert guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 3. One Person Company (OPC)
  // ─────────────────────────────────────────────
  {
    slug: "one-person-company",
    category: "Start My Business",
    headline: "One Person Company Registration — All the Power, Solo",
    subheadline:
      "Run a company entirely on your own — with limited liability and full legal recognition.",
    overview: {
      para1:
        "Introduced under the Companies Act, 2013, a One Person Company (OPC) allows a single individual to incorporate and operate a company with 100% ownership. It is a distinct legal entity with all the benefits of a Private Limited Company, while being simpler to run than a multi-director setup.",
      para2:
        "An OPC requires only 1 director (who is also the sole shareholder) and a nominee appointed to take over in the event of the member's death or incapacity. An OPC must convert to a Private Limited Company once paid-up capital exceeds ₹50 lakhs or annual turnover exceeds ₹2 crores.",
    },
    benefits: [
      {
        title: "Single Ownership",
        detail:
          "100% ownership and control with no need for a co-founder or partner.",
      },
      {
        title: "Limited Liability",
        detail:
          "Personal assets are fully protected. Liability is limited to the company's assets.",
      },
      {
        title: "Separate Legal Entity",
        detail:
          "Can sign contracts, own assets, and open bank accounts in its own name.",
      },
      {
        title: "Perpetual Succession",
        detail:
          "Business continues through the appointed nominee even in the event of the owner's death.",
      },
      {
        title: "Easy Access to Funding",
        detail:
          "Banks and NBFCs prefer lending to incorporated entities over sole proprietorships.",
      },
      {
        title: "Less Compliance Burden",
        detail:
          "No AGM requirement and relaxed board meeting norms compared to a Pvt Ltd.",
      },
    ],
    processSteps: [
      {
        title: "Obtain DSC",
        detail:
          "The sole director must obtain a Class 3 Digital Signature Certificate for filing forms on the MCA portal.",
      },
      {
        title: "Apply for DIN",
        detail:
          "Apply for a Director Identification Number via SPICe+ or Form DIR-3.",
      },
      {
        title: "Name Reservation",
        detail:
          "Reserve the company name via RUN on the MCA portal. The name must end with '(OPC) Private Limited'.",
      },
      {
        title: "Obtain Nominee Consent",
        detail:
          "A nominee must be appointed who will take over in case of incapacity or death of the member. Written consent is obtained in Form INC-3.",
      },
      {
        title: "Draft MOA & AOA",
        detail:
          "We prepare customised MOA and AOA appropriate for a single-member company and your specific business activity.",
      },
      {
        title: "File SPICe+ & Receive Incorporation Certificate",
        detail:
          "SPICe+ is filed with all supporting documents. The ROC issues the Certificate of Incorporation. PAN and TAN are issued simultaneously.",
      },
    ],
    documentsRequired: [
      {
        category: "For the Sole Director / Member",
        documents: [
          "PAN Card",
          "Aadhaar Card / Passport / Voter ID",
          "Address proof (bank statement or utility bill — not older than 2 months)",
          "Passport-size photograph",
          "Email ID and mobile number",
        ],
      },
      {
        category: "For the Nominee",
        documents: [
          "PAN Card and Aadhaar Card of the nominee",
          "Written consent in Form INC-3",
        ],
      },
      {
        category: "For Registered Office",
        documents: [
          "Ownership proof or rental agreement",
          "Utility bill of the registered address",
          "NOC from the property owner",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. helps solo entrepreneurs set up a legally sound, professionally structured company — without the complexity.",
      points: [
        {
          title: "Expert Team",
          detail:
            "Qualified CSs who understand the nuances of OPC registration and conversion rules.",
        },
        {
          title: "End-to-End Support",
          detail:
            "Nominee documentation, MOA/AOA drafting, and SPICe+ filing — fully managed.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed fees with no hidden costs.",
        },
        {
          title: "Fast Turnaround",
          detail:
            "Digital processes ensure your OPC is registered in the shortest possible time.",
        },
        {
          title: "Ongoing Compliance",
          detail:
            "We handle your annual ROC filings, income tax returns, and regulatory updates.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your One Person Company registered seamlessly with expert support from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 4. LLP Registration
  // ─────────────────────────────────────────────
  {
    slug: "llp-registration",
    category: "Start My Business",
    headline:
      "LLP Registration — Flexibility of a Partnership, Protection of a Company",
    subheadline:
      "The preferred structure for professionals, consultants, and growing service businesses.",
    overview: {
      para1:
        "A Limited Liability Partnership (LLP) is governed by the Limited Liability Partnership Act, 2008 and regulated by the Ministry of Corporate Affairs. It combines the advantages of a partnership with the corporate benefits of limited liability and a separate legal identity.",
      para2:
        "An LLP requires a minimum of 2 designated partners, both of whom must hold a DPIN. It is especially popular among CA firms, law firms, consulting agencies, and IT companies. Unlike a company, an LLP has no requirement for board meetings or AGMs, making it operationally lighter.",
    },
    benefits: [
      {
        title: "Limited Liability",
        detail:
          "Each partner's liability is limited to their agreed contribution. Personal assets are protected.",
      },
      {
        title: "Separate Legal Entity",
        detail:
          "The LLP is distinct from its partners and can own property, enter contracts, and initiate legal proceedings.",
      },
      {
        title: "Flexible Structure",
        detail:
          "Partners define their roles, responsibilities, and profit-sharing through the LLP Agreement.",
      },
      {
        title: "Lower Compliance Burden",
        detail:
          "No mandatory board meetings, no AGM, and simpler annual filing compared to a company.",
      },
      {
        title: "No Minimum Capital Requirement",
        detail: "An LLP can be formed with any amount of capital.",
      },
      {
        title: "Tax Efficiency",
        detail:
          "LLPs are not subject to Dividend Distribution Tax. Profits can be distributed freely.",
      },
      {
        title: "Perpetual Succession",
        detail:
          "The LLP continues irrespective of changes in partner composition.",
      },
    ],
    processSteps: [
      {
        title: "Obtain DPIN / DIN",
        detail:
          "Every designated partner must obtain a DPIN through Form DIR-3 or via the FiLLiP incorporation form.",
      },
      {
        title: "Obtain DSC",
        detail:
          "All designated partners must obtain a Class 3 DSC for digitally signing MCA forms.",
      },
      {
        title: "Name Reservation via RUN-LLP",
        detail:
          "Apply for LLP name approval through the RUN-LLP portal. The name must end with 'LLP' or 'Limited Liability Partnership'.",
      },
      {
        title: "File FiLLiP Form",
        detail:
          "File Form FiLLiP on the MCA portal capturing partner details, registered office address, and LLP objectives.",
      },
      {
        title: "Draft & File LLP Agreement",
        detail:
          "The LLP Agreement governs rights, duties, and profit-sharing among partners. It must be filed with the MCA within 30 days of incorporation using Form 3.",
      },
      {
        title: "Certificate of Incorporation",
        detail:
          "The ROC issues a Certificate of Incorporation with a unique LLPIN. PAN and TAN are issued simultaneously.",
      },
    ],
    documentsRequired: [
      {
        category: "For Designated Partners",
        documents: [
          "PAN Card of all designated partners",
          "Aadhaar Card / Passport / Voter ID",
          "Address proof (not older than 2 months)",
          "Passport-size photographs",
          "Email IDs and mobile numbers",
        ],
      },
      {
        category: "For Registered Office",
        documents: [
          "Proof of registered office (electricity bill / property tax receipt)",
          "NOC from the property owner",
          "Rent agreement (if applicable)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. has helped numerous professional firms and service businesses structure their LLP correctly from day one.",
      points: [
        {
          title: "Expert Team",
          detail:
            "CSs and CAs with thorough knowledge of LLP law, partnership structures, and MCA compliance.",
        },
        {
          title: "Custom LLP Agreement",
          detail:
            "We draft a legally sound agreement tailored to your specific business and partner arrangement.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed-fee engagement with clear timelines.",
        },
        {
          title: "Fast Turnaround",
          detail: "Efficient filing on MCA21 ensures quick registration.",
        },
        {
          title: "Annual Compliance Support",
          detail:
            "Form 8, Form 11, income tax returns, and all LLP annual filings handled by us.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your LLP registered seamlessly with expert guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 5. Partnership Firm Registration
  // ─────────────────────────────────────────────
  {
    slug: "partnership-firm-registration",
    category: "Start My Business",
    headline: "Partnership Firm Registration — Simple. Trusted. Effective.",
    subheadline:
      "The ideal structure for two or more individuals who want to start a business together with minimal formalities.",
    overview: {
      para1:
        "A Partnership Firm is governed by the Indian Partnership Act, 1932 and is formed by a mutual agreement between two or more persons (partners) to share profits and losses. While registration is not compulsory under law, a registered partnership firm enjoys significant legal rights and advantages over an unregistered one.",
      para2:
        "Unlike an LLP, a traditional partnership firm does not have a separate legal identity from its partners, and partners bear unlimited personal liability for the firm's debts. Registration is done with the Registrar of Firms (ROF) of the respective state.",
    },
    benefits: [
      {
        title: "Simple to Form",
        detail:
          "Easy to establish with minimal documentation and low registration cost.",
      },
      {
        title: "Flexible Management",
        detail:
          "Partners decide profit-sharing ratios, roles, and responsibilities through the Partnership Deed.",
      },
      {
        title: "Combined Resources",
        detail:
          "Multiple partners bring capital, skills, and networks — strengthening the business.",
      },
      {
        title: "Legal Rights",
        detail:
          "A registered partnership can file suits against third parties and enforce its rights in court.",
      },
      {
        title: "Mutual Decision-Making",
        detail:
          "Suited for businesses built on personal relationships where collective decisions are valued.",
      },
      {
        title: "Tax Planning Opportunities",
        detail:
          "Profits taxed at firm level (30%) with partner remuneration and interest being deductible.",
      },
    ],
    processSteps: [
      {
        title: "Draft the Partnership Deed",
        detail:
          "The Partnership Deed specifies the firm name, partner details, capital contributions, profit-sharing ratio, remuneration, roles, and terms of dissolution. We draft a comprehensive deed tailored to your business.",
      },
      {
        title: "Execute on Stamp Paper",
        detail:
          "The deed must be executed on non-judicial stamp paper of the appropriate value as per the state's Stamp Duty Act.",
      },
      {
        title: "Signature & Notarisation",
        detail:
          "All partners must sign the deed. A notarised copy may be required for certain subsequent registrations.",
      },
      {
        title: "Application to Registrar of Firms",
        detail:
          "File Form 1 along with a certified copy of the Partnership Deed with the Registrar of Firms of the respective state.",
      },
      {
        title: "Certificate of Registration",
        detail:
          "The Registrar issues the Certificate of Registration. The firm can now apply for a PAN in the firm's name.",
      },
      {
        title: "Post-Registration Registrations",
        detail:
          "Apply for GST (if applicable), MSME/Udyam, shop and establishment licence, and open a current bank account in the firm's name.",
      },
    ],
    documentsRequired: [
      {
        category: "For All Partners",
        documents: [
          "PAN Card of each partner",
          "Aadhaar Card / Passport / Voter ID",
          "Address proof of each partner",
          "Passport-size photographs",
        ],
      },
      {
        category: "For the Firm",
        documents: [
          "Duly executed Partnership Deed on stamp paper",
          "Proof of principal place of business (utility bill / rent agreement)",
          "NOC from property owner (if premises are rented)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. prepares legally sound partnership deeds and handles Registrar of Firms filing across states — so your firm starts on the right footing.",
      points: [
        {
          title: "Expert Team",
          detail:
            "Experience across state-specific ROF procedures and partnership law.",
        },
        {
          title: "Custom Deed Drafting",
          detail:
            "We draft a deed that clearly defines every partner's role, share, and exit terms.",
        },
        {
          title: "Transparent Pricing",
          detail: "Flat-fee service with no surprises.",
        },
        {
          title: "Fast Turnaround",
          detail: "Quick deed preparation and filing.",
        },
        {
          title: "Bundled Services",
          detail:
            "We can simultaneously assist with GST registration, MSME registration, and bank account opening.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your Partnership Firm registered with professional guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 6. Section 8 Company (NGO)
  // ─────────────────────────────────────────────
  {
    slug: "section-8-company",
    category: "Start My Business",
    headline: "Section 8 Company Registration — Give Your Mission a Legal Home",
    subheadline:
      "India's most transparent and credible structure for NGOs, charitable trusts, and non-profit organisations.",
    overview: {
      para1:
        "A Section 8 Company is incorporated under Section 8 of the Companies Act, 2013 and is permitted to carry on activities promoting education, art, science, sports, research, social welfare, religion, charity, or environmental protection. Profits, if any, must be applied towards stated objectives and cannot be distributed as dividends.",
      para2:
        "Despite being non-profit, a Section 8 Company has a separate legal identity, perpetual succession, and is governed by the MCA — making it the most accountable and transparent NGO structure in India. It enjoys various tax exemptions and is eligible for FCRA registration for receiving foreign contributions.",
    },
    benefits: [
      {
        title: "Recognised Legal Status",
        detail:
          "More credible than a Trust or Society; regulated by MCA and subject to periodic audits.",
      },
      {
        title: "Tax Exemptions",
        detail:
          "Eligible for Section 12A (income tax exemption) and 80G (donor deduction) status.",
      },
      {
        title: "No Minimum Capital",
        detail: "Can be incorporated with any amount of capital contribution.",
      },
      {
        title: "Separate Legal Entity",
        detail:
          "Can own property, open bank accounts, enter contracts, and sue or be sued in its own name.",
      },
      {
        title: "Stamp Duty Exemption",
        detail:
          "Section 8 Companies are generally exempt from stamp duty on incorporation documents.",
      },
      {
        title: "FCRA Eligibility",
        detail:
          "Can receive foreign contributions for charitable activities, enabling international fundraising.",
      },
      {
        title: "Credibility for CSR Funding",
        detail:
          "Recognised by corporates and government agencies for CSR grants and donations.",
      },
    ],
    processSteps: [
      {
        title: "Obtain DSC and DIN for Directors",
        detail:
          "All proposed directors must obtain a Class 3 DSC and a DIN before filing.",
      },
      {
        title: "Name Reservation",
        detail:
          "Apply for name approval via RUN on the MCA portal. The name must reflect the charitable objectives of the company.",
      },
      {
        title: "Apply for Section 8 Licence (Form INC-12)",
        detail:
          "File Form INC-12 along with draft MOA, AOA, and declaration to the Regional Director to obtain prior approval for incorporating as a Section 8 entity.",
      },
      {
        title: "Obtain Licence (Form INC-16)",
        detail:
          "The Central Government issues the licence in Form INC-16 authorising incorporation as a Section 8 Company.",
      },
      {
        title: "File SPICe+ for Incorporation",
        detail:
          "File SPICe+ with the licence, MOA, AOA, and all director documents to complete formal incorporation.",
      },
      {
        title: "Certificate of Incorporation",
        detail:
          "The ROC issues the Certificate of Incorporation. The company is now a registered non-profit entity with PAN and TAN.",
      },
      {
        title: "Apply for 12A & 80G Registration",
        detail:
          "Apply with the Income Tax Department for 12A (income tax exemption for the organisation) and 80G (tax deduction for donors). We handle both applications.",
      },
    ],
    documentsRequired: [
      {
        category: "For Directors and Members",
        documents: [
          "PAN Card of all directors and members",
          "Aadhaar Card / Passport / Voter ID",
          "Address proof (not older than 2 months)",
          "Passport-size photographs",
          "Declaration of non-profit intent by each director",
        ],
      },
      {
        category: "For the Organisation",
        documents: [
          "Draft MOA and AOA clearly stating charitable objectives",
          "Proof of registered office address",
          "Estimated income and expenditure for next 3 years",
          "NOC from property owner",
          "List of promoters / founding members with their details",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. has guided social entrepreneurs, trusts, and mission-driven organisations through the complete Section 8 registration process.",
      points: [
        {
          title: "Expert Team",
          detail:
            "Deep knowledge of MCA licensing, 12A/80G applications, and FCRA regulations.",
        },
        {
          title: "End-to-End Support",
          detail:
            "MOA/AOA drafting, INC-12 filing, and post-registration tax exemption applications — all managed.",
        },
        {
          title: "Transparent Pricing",
          detail: "Clear, fixed-fee engagement suited to NGO budgets.",
        },
        {
          title: "Fast Turnaround",
          detail:
            "We track licence approvals and follow up with the Regional Director on your behalf.",
        },
        {
          title: "Ongoing Compliance",
          detail:
            "Annual ROC filings, income tax returns, FCRA renewals, and CSR receipt management.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your Section 8 Company (NGO) registered with expert guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 7. FSSAI Registration
  // ─────────────────────────────────────────────
  {
    slug: "fssai-registration",
    category: "Industry & Business Registrations",
    headline: "FSSAI Registration — Mandatory for Every Food Business in India",
    subheadline:
      "From home bakers to large manufacturers — your food business needs a valid FSSAI licence before it opens its doors.",
    overview: {
      para1:
        "FSSAI (Food Safety and Standards Authority of India) is the apex food regulatory body established under the Food Safety and Standards Act, 2006. Every Food Business Operator (FBO) — whether a petty vendor, restaurant, caterer, food manufacturer, importer, or e-commerce food platform — must obtain FSSAI registration or licence before commencing operations.",
      para2:
        "FSSAI registration is categorised into three levels: Basic Registration (Form A) — Annual turnover up to ₹12 lakhs, issued by State Food Safety Authority; State Licence (Form B) — Turnover between ₹12 lakhs and ₹20 crores; Central Licence (Form B) — Turnover above ₹20 crores, importers, exporters, and operators at airports and seaports.",
    },
    benefits: [
      {
        title: "Legal Compliance",
        detail:
          "Mandatory under the FSS Act, 2006. Operating without FSSAI registration attracts heavy penalties and business closure.",
      },
      {
        title: "Consumer Trust",
        detail:
          "The 14-digit FSSAI number on your packaging builds customer confidence in your product's safety.",
      },
      {
        title: "Platform Onboarding",
        detail:
          "Required to list on Zomato, Swiggy, Amazon Fresh, and other food delivery platforms.",
      },
      {
        title: "Access to Larger Markets",
        detail:
          "State and Central Licences allow expansion to multiple states and export markets.",
      },
      {
        title: "Brand Protection",
        detail:
          "Demonstrates commitment to hygiene and quality standards.",
      },
      {
        title: "Funding & Loans",
        detail:
          "Banks require FSSAI registration for food business loan applications.",
      },
    ],
    processSteps: [
      {
        title: "Identify the Correct Category",
        detail:
          "Determine whether you need Basic Registration, State Licence, or Central Licence based on turnover, production capacity, and area of operations. We assess your profile and guide you.",
      },
      {
        title: "Prepare Documents",
        detail:
          "Gather all required documents as per your licence category. We provide a clear checklist and verify each document before submission.",
      },
      {
        title: "Apply on FoSCoS Portal",
        detail:
          "Applications are filed on the FoSCoS (Food Safety Compliance System) portal. Our team fills in the application accurately and uploads all supporting documents.",
      },
      {
        title: "Inspection (State & Central Licence)",
        detail:
          "For State and Central Licences, a food safety officer may conduct a premises inspection. We help you prepare for the inspection to ensure smooth clearance.",
      },
      {
        title: "FSSAI Certificate Issued",
        detail:
          "Upon successful verification, the FSSAI certificate is issued and must be displayed prominently at the place of business.",
      },
    ],
    documentsRequired: [
      {
        category: "For Basic Registration",
        documents: [
          "Photo ID proof (Aadhaar / PAN / Voter ID) of the proprietor",
          "Proof of business address",
          "Passport-size photograph",
        ],
      },
      {
        category: "For State / Central Licence",
        documents: [
          "PAN Card and photo ID of the applicant / director",
          "Proof of business premises (ownership or rental agreement)",
          "Blueprint / layout of the food processing unit (for manufacturers)",
          "List of food products to be manufactured or handled",
          "List of machinery and equipment with installed capacity",
          "Water testing report (for manufacturers)",
          "NOC from municipality / panchayat",
          "Partnership deed / incorporation certificate / MOA-AOA (as applicable)",
          "Bank account details",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. has assisted food businesses across categories — from cloud kitchens and restaurants to processors and exporters — in obtaining their FSSAI registrations without delays.",
      points: [
        {
          title: "Industry Expertise",
          detail:
            "We understand FSSAI classifications and help you choose the right category the first time.",
        },
        {
          title: "Complete Documentation",
          detail:
            "We verify every document before upload to avoid rejections.",
        },
        {
          title: "Inspection Preparation",
          detail:
            "We brief you on what the food safety officer will check.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed professional fees with no hidden add-ons.",
        },
        {
          title: "Renewal & Amendments",
          detail:
            "We track your FSSAI renewal dates and handle modifications to your licence as your business grows.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your FSSAI Registration completed seamlessly with expert support from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 8. Import Export Code (IEC)
  // ─────────────────────────────────────────────
  {
    slug: "iec-registration",
    category: "Industry & Business Registrations",
    headline:
      "Import Export Code (IEC) Registration — Your Gateway to Global Trade",
    subheadline:
      "Mandatory for every business importing or exporting goods and services from India.",
    overview: {
      para1:
        "The Import Export Code (IEC) is a 10-digit unique identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. It is mandatory for any person or business entity engaged in import or export of goods or services from India.",
      para2:
        "IEC is a one-time registration with no renewal requirement and no annual filing obligations. It is a prerequisite for customs clearance of shipments, receiving or making foreign payments through banks, and availing benefits under export promotion schemes such as RoDTEP, MEIS, SEIS, and EPCG.",
    },
    benefits: [
      {
        title: "Mandatory for Trade",
        detail:
          "No import or export transaction is legally permissible without a valid IEC number.",
      },
      {
        title: "Lifetime Registration",
        detail: "IEC is a permanent, one-time registration with no renewal fee.",
      },
      {
        title: "Export Incentives",
        detail:
          "Enables businesses to claim refunds under RoDTEP, Advance Authorisation, and EPCG schemes.",
      },
      {
        title: "Global Market Access",
        detail:
          "Opens doors to international buyers and suppliers beyond domestic markets.",
      },
      {
        title: "Foreign Remittances",
        detail:
          "Banks require IEC for processing trade-related foreign currency transactions.",
      },
      {
        title: "No Return Filing",
        detail:
          "Unlike GST or income tax, IEC has no periodic return filing.",
      },
      {
        title: "Applicable to All",
        detail:
          "Individuals, proprietorships, partnerships, LLPs, companies, and trusts can all obtain IEC.",
      },
    ],
    processSteps: [
      {
        title: "Visit the DGFT Portal",
        detail:
          "Registration is done entirely online at dgft.gov.in. An account is created using the applicant's email ID and mobile number.",
      },
      {
        title: "Fill ANF 2A Application Form",
        detail:
          "Complete the online application providing details of the business entity, address, bank details, and the nature of import/export activity.",
      },
      {
        title: "Upload Documents",
        detail:
          "Upload the required documents in the prescribed formats.",
      },
      {
        title: "Pay Application Fee",
        detail:
          "Pay the government fee of ₹500 online via net banking, UPI, or debit/credit card on the DGFT portal.",
      },
      {
        title: "IEC Certificate Issued",
        detail:
          "Upon successful verification — typically within 2 to 3 working days — the IEC certificate is available for download on the DGFT portal.",
      },
    ],
    documentsRequired: [
      {
        category: "For Individual / Proprietorship",
        documents: [
          "PAN Card of the individual / proprietor",
          "Aadhaar Card / Passport / Voter ID",
          "Cancelled cheque or bank certificate with entity name, account number, and IFSC code",
          "Address proof of business premises",
          "Passport-size photograph",
        ],
      },
      {
        category: "For Partnership / LLP / Company",
        documents: [
          "PAN Card of the entity",
          "Certificate of incorporation / partnership deed / LLP agreement",
          "PAN and ID proof of the authorised signatory",
          "Cancelled cheque or bank certificate in the entity name",
          "Business address proof",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. handles IEC registration for importers, exporters, and service providers — ensuring accurate filing and fastest turnaround.",
      points: [
        {
          title: "DGFT Expertise",
          detail:
            "We are familiar with DGFT portal processes and avoid common errors that delay registration.",
        },
        {
          title: "Documentation Support",
          detail:
            "We verify all documents before submission to ensure zero rejections.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed fee with no hidden charges.",
        },
        {
          title: "Fast Turnaround",
          detail:
            "IEC issued typically within 2 to 3 working days of document submission.",
        },
        {
          title: "Annual IEC Update",
          detail:
            "We handle the mandatory annual IEC profile update (April–June) on the DGFT portal.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your IEC Registration completed seamlessly with expert support from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 9. Startup India Registration (DPIIT)
  // ─────────────────────────────────────────────
  {
    slug: "startup-india-registration",
    category: "Industry & Business Registrations",
    headline:
      "Startup India Registration — Unlock Government Benefits for Your Startup",
    subheadline:
      "Get DPIIT recognition and access tax exemptions, angel tax relief, fast-track IP filings, and government funding support.",
    overview: {
      para1:
        "Launched in January 2016, Startup India is a flagship Government of India initiative to foster innovation and entrepreneurship. Startups recognised by the Department for Promotion of Industry and Internal Trade (DPIIT) receive a recognition certificate that unlocks a powerful set of benefits.",
      para2:
        "Eligibility criteria: (1) Incorporated as a Pvt Ltd, LLP, or Registered Partnership Firm. (2) Entity not more than 10 years old. (3) Annual turnover not exceeding ₹100 crores in any year since incorporation. (4) Working on innovation, development, or improvement of products/processes — or is a scalable, high-employment-potential business. (5) Not formed by splitting an existing business.",
    },
    benefits: [
      {
        title: "Income Tax Exemption (80-IAC)",
        detail:
          "100% tax deduction on profits for any 3 consecutive years out of the first 10 years, subject to CBDT approval.",
      },
      {
        title: "Angel Tax Exemption",
        detail:
          "Investments received from angel investors are exempt from tax under Section 56(2)(viib).",
      },
      {
        title: "Self-Certification for Compliance",
        detail:
          "Startups can self-certify compliance under 9 labour laws and 3 environmental laws.",
      },
      {
        title: "IP Benefits",
        detail:
          "80% rebate on patent filing fees, expedited examination, and 50% rebate on trademark filing fees.",
      },
      {
        title: "Government Procurement",
        detail:
          "Startups can bid for government tenders without prior experience or turnover requirements.",
      },
      {
        title: "Fund of Funds",
        detail:
          "Eligible for funding through SIDBI's Fund of Funds for Startups (FFS).",
      },
      {
        title: "Easy Wind-Up",
        detail:
          "DPIIT-recognised startups can be wound up within 90 days under the IBC, 2016.",
      },
    ],
    processSteps: [
      {
        title: "Incorporate the Entity",
        detail:
          "The startup must first be incorporated as a Pvt Ltd, LLP, or Registered Partnership Firm. We assist with incorporation if not already done.",
      },
      {
        title: "Create a Profile on Startup India Portal",
        detail:
          "Visit startupindia.gov.in and create a profile using the company's official email ID.",
      },
      {
        title: "Apply for DPIIT Recognition",
        detail:
          "Fill out the online application under 'DPIIT Recognition' — providing details on the nature of business, innovation, and scalability.",
      },
      {
        title: "Upload Supporting Documents",
        detail:
          "Submit required documents along with a brief write-up on the startup's innovative product or service. Patents, awards, or funding letters strengthen the application.",
      },
      {
        title: "DPIIT Recognition Certificate",
        detail:
          "DPIIT reviews the application and issues the recognition certificate — typically within 2 working days for complete applications.",
      },
      {
        title: "Apply for Tax Benefits (80-IAC & Angel Tax)",
        detail:
          "After DPIIT recognition, apply separately to CBDT for income tax exemption under Section 80-IAC and angel tax exemption under Section 56(2)(viib). We manage both applications.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Certificate of Incorporation / Registration Certificate",
          "PAN Card of the entity",
          "MOA and AOA / LLP Agreement / Partnership Deed",
          "Brief write-up on the innovative nature of the business (1–2 pages)",
          "Proof of funding (term sheets, investment agreements) — if applicable",
          "Awards, patents, or recognition letters — if applicable",
          "Details of the authorised representative / founder",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. helps startups present their applications in the strongest possible way — maximising the chances of DPIIT recognition and subsequent tax benefit approvals.",
      points: [
        {
          title: "Recognition Expertise",
          detail:
            "We understand what DPIIT looks for and help you frame your innovation story compellingly.",
        },
        {
          title: "Tax Benefit Applications",
          detail:
            "We handle 80-IAC and angel tax exemption filings post-recognition.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed-fee service with clear deliverables.",
        },
        {
          title: "Fast Turnaround",
          detail:
            "Complete applications are typically recognised within 2 working days.",
        },
        {
          title: "Startup Compliance Support",
          detail:
            "We handle your MCA annual filings, income tax returns, and regulatory obligations going forward.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your Startup India Recognition completed with expert guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 10. MSME / Udyam Registration
  // ─────────────────────────────────────────────
  {
    slug: "msme-udyam-registration",
    category: "Industry & Business Registrations",
    headline: "MSME Registration (Udyam) — Free, Instant & Packed with Benefits",
    subheadline:
      "Register your business as an MSME and unlock priority lending, government subsidies, and legal protection against delayed payments.",
    overview: {
      para1:
        "MSME Registration — officially called Udyam Registration — is governed by the Ministry of MSME under the MSMED Act, 2006 (revised 2020). Registration is done on the Udyam portal, is completely free of cost, and is based on self-declaration linked to Aadhaar and PAN.",
      para2:
        "MSME Classification (revised 2020 norms): Micro — Investment up to ₹1 crore AND turnover up to ₹5 crores; Small — Investment up to ₹10 crores AND turnover up to ₹50 crores; Medium — Investment up to ₹50 crores AND turnover up to ₹250 crores. Both manufacturing and service sector businesses are eligible.",
    },
    benefits: [
      {
        title: "Priority Sector Lending",
        detail:
          "Banks extend credit to MSMEs at preferential interest rates.",
      },
      {
        title: "Collateral-Free Loans",
        detail:
          "Access to credit under CGTMSE without the need for collateral.",
      },
      {
        title: "Government Procurement Preference",
        detail:
          "Reserved items and relaxed norms under Public Procurement Policy.",
      },
      {
        title: "Delayed Payment Protection",
        detail:
          "Buyers must pay MSMEs within 45 days. Delayed payments attract compound interest at 3x the bank rate.",
      },
      {
        title: "Subsidies & Schemes",
        detail:
          "Access to subsidies on ISO certification, technology upgradation, marketing, and cluster development.",
      },
      {
        title: "Reduced Filing Fees",
        detail: "Concession on trademark and patent filing fees.",
      },
      {
        title: "Lifetime Validity",
        detail: "No renewal fees and no annual filing obligations.",
      },
    ],
    processSteps: [
      {
        title: "Visit Udyam Registration Portal",
        detail:
          "Go to udyamregistration.gov.in. Select the option for new entrepreneurs not registered as MSME.",
      },
      {
        title: "Aadhaar Verification",
        detail:
          "Enter the Aadhaar number of the proprietor / managing partner / authorised director and verify via OTP.",
      },
      {
        title: "PAN & GST Verification",
        detail:
          "Provide PAN and GST details. The system auto-fetches ITR and GST data to populate turnover and investment information.",
      },
      {
        title: "Fill Business Details",
        detail:
          "Enter the enterprise name, type of organisation, major activity (manufacturing or services), NIC code, bank details, and number of employees.",
      },
      {
        title: "Receive Udyam Certificate",
        detail:
          "The Udyam Registration Certificate with a permanent URN and QR code is generated immediately and sent to the registered email.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Aadhaar Card of the proprietor / managing partner / authorised director",
          "PAN Card of the entity (or individual, for proprietorship)",
          "GSTIN (if registered — auto-verified from GSTN)",
          "Bank account number and IFSC code",
          "Business address details",
          "NIC code for the business activity",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. ensures accurate NIC code selection and error-free Udyam filing — preventing misclassification that could affect your eligibility for schemes.",
      points: [
        {
          title: "Accurate Classification",
          detail:
            "We identify the correct NIC code and MSME category for your business activity.",
        },
        {
          title: "Error-Free Filing",
          detail:
            "We cross-verify Aadhaar, PAN, and GST data before submission to avoid portal rejections.",
        },
        {
          title: "Transparent Pricing",
          detail: "Minimal professional fee for a fast and accurate service.",
        },
        {
          title: "Fast Turnaround",
          detail: "Certificate generated within the same day in most cases.",
        },
        {
          title: "Bundled Services",
          detail:
            "We can simultaneously assist with GST, Shop Act, and other registrations.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your MSME / Udyam Registration completed accurately with support from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 11. Shop & Establishment Registration
  // ─────────────────────────────────────────────
  {
    slug: "shop-establishment-registration",
    category: "Industry & Business Registrations",
    headline:
      "Shop & Establishment Registration — Your First Compliance, Done Right",
    subheadline:
      "The basic licence every commercial business must obtain before starting operations.",
    overview: {
      para1:
        "The Shops and Establishments Act is a state-level legislation enacted by each state government to regulate conditions of work and employment in shops, commercial establishments, restaurants, hotels, theatres, and other places of business. Since it is state-specific, the procedure, fees, and timelines vary by state.",
      para2:
        "Commonly called the Shop Act Licence or Gumasta Licence (in Maharashtra), this registration must be obtained from the local municipal authority or labour department within 30 days of commencing business. It applies to retail and wholesale shops, offices, restaurants, hotels, warehouses, theatres, and any establishment employing workers at a fixed commercial location.",
    },
    benefits: [
      {
        title: "Legal Compliance",
        detail:
          "Mandatory for all commercial establishments. Operating without registration attracts fines and penalties under state labour laws.",
      },
      {
        title: "Bank Account Opening",
        detail:
          "The Shop Act Certificate is a recognised proof of business existence required to open a current bank account.",
      },
      {
        title: "GST & Other Registrations",
        detail:
          "Required as address proof for GST registration, FSSAI, and other licences.",
      },
      {
        title: "Employee Regulation",
        detail:
          "Formalises employer obligations regarding working hours, leave, holidays, and worker welfare.",
      },
      {
        title: "Government Tenders",
        detail:
          "Many government contracts and tenders accept the Shop Act Certificate as proof of commercial registration.",
      },
      {
        title: "Business Credibility",
        detail:
          "Customers and vendors view registered establishments as trustworthy and professional.",
      },
    ],
    processSteps: [
      {
        title: "Identify Applicable State Law",
        detail:
          "Each state has its own Shops and Establishments Act and portal. We identify the correct procedure for your state.",
      },
      {
        title: "Application Preparation",
        detail:
          "Prepare the application with establishment name, address, business category, number of employees, and proprietor/manager details.",
      },
      {
        title: "Online / Offline Filing",
        detail:
          "Most states now offer online registration through the labour department portal or single-window clearance system. We file on your behalf.",
      },
      {
        title: "Payment of Registration Fee",
        detail:
          "Pay the prescribed registration fee, which varies by state and by the number of employees.",
      },
      {
        title: "Inspection (if applicable)",
        detail:
          "Some states conduct a physical premises inspection before issuing the certificate. We help you prepare.",
      },
      {
        title: "Registration Certificate Issued",
        detail:
          "The Shop & Establishment Certificate is issued and must be displayed at the place of business. Annual renewal is required as per state-specific rules.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "PAN Card of the proprietor / partners / directors",
          "Aadhaar Card / Passport / Voter ID of the applicant",
          "Proof of business address (electricity bill / rent agreement / property tax receipt)",
          "NOC from property owner (if premises are rented)",
          "Passport-size photographs of the proprietor / manager",
          "Partnership deed / incorporation certificate (if applicable)",
          "Details of employees — number and categories",
          "Nature of business / trade category",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. handles Shop Act registrations across states — saving you the hassle of navigating different state portals and requirements.",
      points: [
        {
          title: "State-Specific Expertise",
          detail:
            "We know the exact procedure, fees, and timelines for your state.",
        },
        {
          title: "Fast Filing",
          detail:
            "We file on your behalf and track the application to completion.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed professional fees per state.",
        },
        {
          title: "Annual Renewal Reminders",
          detail:
            "We remind you before your Shop Act expires and handle the renewal.",
        },
        {
          title: "Bundled Services",
          detail:
            "Register for GST, MSME, and Shop Act simultaneously with one engagement.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your Shop & Establishment Registration done quickly and correctly with P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // ─────────────────────────────────────────────
  // 12. IEC for Service Exporters
  // ─────────────────────────────────────────────
  {
    slug: "iec-service-exporters",
    category: "Industry & Business Registrations",
    headline: "IEC for Service Exporters — Stay Compliant, Get Paid Globally",
    subheadline:
      "Freelancers, IT companies, consultants, and SaaS businesses receiving payments from overseas clients need a valid IEC.",
    overview: {
      para1:
        "While IEC is commonly associated with physical goods trade, it is equally important for service exporters. Any Indian business or individual receiving foreign currency for services rendered to overseas clients — whether in IT, consulting, design, education, healthcare, or any other sector — must have a valid IEC for full FEMA and RBI compliance.",
      para2:
        "IEC is mandatory for receiving inward foreign remittances through banks for export of services; filing Foreign Inward Remittance Certificates (FIRC) and Bank Realisation Certificates (BRC); availing SEIS rewards from DGFT; registering on platforms like Amazon Global Selling, Upwork, and Fiverr; and complying with FEMA regulations on cross-border transactions.",
    },
    benefits: [
      {
        title: "FEMA Compliance",
        detail:
          "Ensures all foreign remittances are processed through legitimate banking channels in full compliance with FEMA.",
      },
      {
        title: "SEIS Benefits",
        detail:
          "Eligible to claim Service Exports from India Scheme (SEIS) duty credit scrips from DGFT.",
      },
      {
        title: "Bank Processing",
        detail:
          "Banks require IEC while processing trade-related foreign currency payments above prescribed thresholds.",
      },
      {
        title: "Global Platforms",
        detail:
          "Required for registering as a seller or service provider on international marketplaces.",
      },
      {
        title: "Lifetime Registration",
        detail:
          "IEC is issued once and remains valid for the lifetime of the entity.",
      },
      {
        title: "No Return Filing",
        detail: "Zero periodic filing obligations unlike GST or income tax.",
      },
    ],
    processSteps: [
      {
        title: "DGFT Portal Registration",
        detail:
          "Register on the DGFT portal (dgft.gov.in) using your email ID and mobile number. Create a business profile with entity details.",
      },
      {
        title: "Complete ANF 2A Application",
        detail:
          "Fill in the IEC application with details of the business, registered address, nature of export activity, and bank details.",
      },
      {
        title: "DSC / OTP Authentication",
        detail:
          "Submit the application using a Digital Signature Certificate (DSC) or Aadhaar-based OTP authentication.",
      },
      {
        title: "Pay Application Fee",
        detail:
          "Pay the government application fee of ₹500 online through the DGFT portal.",
      },
      {
        title: "IEC Certificate Download",
        detail:
          "Upon approval — typically within 2 to 3 working days — the IEC certificate is available for download.",
      },
      {
        title: "Annual Profile Update",
        detail:
          "DGFT requires entities to update / confirm their IEC profile on the portal between April and June every year. We handle this annual update for you.",
      },
    ],
    documentsRequired: [
      {
        category: "For Individuals / Proprietors",
        documents: [
          "PAN Card",
          "Aadhaar Card / Passport / Voter ID",
          "Cancelled cheque or bank certificate with name, account number, and IFSC code",
          "Proof of business address",
          "Passport-size photograph",
        ],
      },
      {
        category: "For Companies / LLPs / Partnerships",
        documents: [
          "PAN Card of the entity",
          "Certificate of Incorporation / LLP Agreement / Partnership Deed",
          "PAN and ID proof of the authorised signatory / director",
          "Bank certificate or cancelled cheque in entity name",
          "Digital Signature Certificate (DSC) of the authorised signatory",
        ],
      },
    ],
    whyChoosePAJ: {
      intro:
        "P.A.J & Co. helps service exporters, freelancers, and digital businesses stay fully compliant with FEMA and DGFT regulations.",
      points: [
        {
          title: "FEMA & DGFT Expertise",
          detail:
            "We understand the compliance requirements for service exporters specifically.",
        },
        {
          title: "Error-Free Filing",
          detail:
            "We verify all documents before submission to avoid DGFT rejections.",
        },
        {
          title: "Transparent Pricing",
          detail: "Fixed fee with no surprises.",
        },
        {
          title: "Fast Turnaround",
          detail: "Certificate typically within 2 to 3 working days.",
        },
        {
          title: "Annual IEC Update",
          detail:
            "We handle the DGFT annual IEC profile confirmation every April–June.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business with Confidence",
      subline:
        "Get your IEC Registration completed seamlessly with expert guidance from P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },
];