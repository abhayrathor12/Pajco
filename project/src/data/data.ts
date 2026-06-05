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

  // ─────────────────────────────────────────────
  // Remaining 42 Services (Sheets 13–54)
  // ─────────────────────────────────────────────

  // 13_Prop
  {
    slug: "proprietorship-setup",
    category: "Start My Business",
    headline: "Set Up Your Sole Proprietorship — Simple & Fast",
    subheadline: "The simplest business structure for individual entrepreneurs and freelancers in India.",
    overview: {
      para1: "A sole proprietorship is the most basic form of business in India, owned and operated by a single individual. There is no formal registration under a single statute; instead, it is recognised through ancillary registrations such as GST, Shop & Establishment, and MSME/Udyam certificates.",
      para2: "While a proprietorship does not have a separate legal identity from its owner, it remains the preferred choice for small traders, consultants, and service providers due to its minimal compliance burden and ease of setup.",
    },
    benefits: [
      {
        title: "Easiest to Start",
        detail: "No formal incorporation — operational within days with basic registrations.",
      },
      {
        title: "Complete Control",
        detail: "You are the sole decision-maker with full authority over operations and profits.",
      },
      {
        title: "Low Compliance Cost",
        detail: "Minimal annual compliances compared to companies or LLPs.",
      },
      {
        title: "No Profit Sharing",
        detail: "All business profits belong entirely to the proprietor.",
      },
      {
        title: "Simple Taxation",
        detail: "Business income is taxed as personal income; no separate corporate tax filing.",
      },
      {
        title: "Easy to Dissolve",
        detail: "Can be wound down at any time without any formal liquidation procedure.",
      },
    ],
    processSteps: [
      {
        title: "Obtain GST Registration",
        detail: "If annual turnover exceeds the threshold, GST registration is mandatory and serves as primary business identity proof.",
      },
      {
        title: "Udyam / MSME Registration",
        detail: "Register on the Udyam portal to obtain MSME status — unlocking government schemes and priority lending.",
      },
      {
        title: "Shop & Establishment Registration",
        detail: "Register under the applicable State Act to legally open a business premises and employ staff.",
      },
      {
        title: "Open a Current Bank Account",
        detail: "A current account in the business name separates personal and business finances.",
      },
      {
        title: "Trade Licence (if applicable)",
        detail: "Certain sectors require a municipal trade licence from your local civic body.",
      },
    ],
    documentsRequired: [
      {
        category: "For the Proprietor",
        documents: [
          "PAN Card",
          "Aadhaar Card",
          "Passport-size photographs",
          "Email ID and mobile number",
        ],
      },
      {
        category: "For Business Address",
        documents: [
          "Electricity bill / property tax receipt",
          "Rent agreement (if applicable)",
          "NOC from property owner",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Start Your Business Journey Today",
      subline: "Set up your proprietorship with the right registrations — fast and hassle-free with P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 14_ICEGATE
  {
    slug: "icegate-dgft-registration",
    category: "Industry & Business Registrations",
    headline: "ICE-GATE & DGFT Registration — Trade Gateway Compliance",
    subheadline: "Mandatory digital credentials for importers, exporters, and customs agents dealing with CBIC and DGFT portals.",
    overview: {
      para1: "ICE-GATE (Indian Customs Electronic Gateway) is the CBIC portal for electronic filing of import/export documents, duty payments, and tracking of consignments. Every entity engaged in customs-related activities must register on ICE-GATE to interact with Indian Customs electronically.",
      para2: "The DGFT (Directorate General of Foreign Trade) portal handles foreign trade policy applications including IEC, EPCG, Advance Authorisation, and RoDTEP claims. Both portals require Digital Signature Certificate (DSC) integration for secure access.",
    },
    benefits: [
      {
        title: "Mandatory for Customs Filing",
        detail: "Required for all importers, exporters, and CHAs filing Bills of Entry and Shipping Bills.",
      },
      {
        title: "Access to DGFT Benefits",
        detail: "Unlocks export incentive schemes, advance licences, and duty exemption claims.",
      },
      {
        title: "DSC-Enabled Security",
        detail: "Digital Signature Certificate ensures secure and legally valid submissions.",
      },
      {
        title: "Real-Time Tracking",
        detail: "Track consignment status, duty payment receipts, and document approval status online.",
      },
      {
        title: "Streamlined Compliance",
        detail: "Single digital interface for all customs and foreign trade filings.",
      },
    ],
    processSteps: [
      {
        title: "Obtain Class 3 DSC",
        detail: "Procure a Class 3 DSC in the name of the authorised signatory — mandatory for both portals.",
      },
      {
        title: "Register on ICE-GATE Portal",
        detail: "Create an account on icegate.gov.in submitting entity details, IEC, and DSC. Approval is typically 24–48 hours.",
      },
      {
        title: "Register on DGFT Portal",
        detail: "Create a Business Profile on dgft.gov.in, link your IEC, and integrate your DSC.",
      },
      {
        title: "Link PAN & IEC",
        detail: "Ensure PAN and IEC are correctly linked on both portals to avoid filing rejections.",
      },
      {
        title: "Test Digital Access",
        detail: "Verify login credentials and DSC functionality before filing live documents.",
      },
    ],
    documentsRequired: [
      {
        category: "For Entity",
        documents: [
          "PAN Card of entity",
          "IEC Certificate",
          "GST Registration Certificate",
          "Certificate of Incorporation / Partnership deed",
          "Aadhaar or passport of authorised signatory",
        ],
      },
      {
        category: "For DSC (if not already obtained)",
        documents: [
          "PAN of authorised signatory",
          "Aadhaar of authorised signatory",
          "Passport-size photograph",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Enable Your Digital Trade Gateway",
      subline: "Get your ICE-GATE and DGFT registrations done right with P.A.J & Co.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 15_DirChange
  {
    slug: "director-appointment-resignation",
    category: "Event-Based Compliance",
    headline: "Director Appointment & Resignation — ROC Filing Made Easy",
    subheadline: "Stay compliant with every boardroom change through timely and accurate ROC filings.",
    overview: {
      para1: "Every change in the board of directors — whether an appointment, resignation, or removal — must be formally recorded and reported to the Registrar of Companies (ROC) within prescribed timelines under the Companies Act, 2013. Failure to file within 30 days attracts penalties and can lead to director disqualification.",
      para2: "The process involves passing the appropriate board or shareholder resolution, updating the statutory registers, and filing Form DIR-12 on the MCA portal. P.A.J & Co. ensures every step is completed accurately and on time.",
    },
    benefits: [
      {
        title: "Statutory Obligation",
        detail: "Timely ROC filing protects directors and the company from penalties under the Companies Act.",
      },
      {
        title: "Maintains Clean MCA Records",
        detail: "Updated MCA records are critical for future filings, loans, and due diligence.",
      },
      {
        title: "Avoids Director Disqualification",
        detail: "Defaulting companies risk disqualification of all directors under Section 164(2).",
      },
      {
        title: "Investor Confidence",
        detail: "Accurate board records are essential during fundraising and M&A due diligence.",
      },
    ],
    processSteps: [
      {
        title: "Pass Board / EGM Resolution",
        detail: "Convene a board meeting or EGM to pass the resolution for appointment or acceptance of resignation.",
      },
      {
        title: "Obtain DIN & DSC (for new directors)",
        detail: "New directors must have a valid DIN and Digital Signature Certificate before filing.",
      },
      {
        title: "Update Statutory Registers",
        detail: "Update Register of Directors and other applicable registers immediately.",
      },
      {
        title: "File Form DIR-12",
        detail: "File Form DIR-12 on the MCA portal within 30 days of the change, attaching resolutions and supporting letters.",
      },
      {
        title: "Intimate Stock Exchange (if listed)",
        detail: "Listed companies must notify the stock exchange immediately under LODR Regulations.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "PAN and Aadhaar of new director (if applicable)",
          "DIN of the director",
          "Digital Signature Certificate (DSC)",
          "Board / shareholder resolution",
          "Consent to act as director (Form DIR-2) for appointment",
          "Resignation letter (for resignation)",
          "Proof of registered office address",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Handle Every Board Change with Confidence",
      subline: "P.A.J & Co. ensures your director changes are filed correctly and on time — every time.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 16_ShareTA
  {
    slug: "share-transfer-allotment",
    category: "Event-Based Compliance",
    headline: "Share Transfer & Allotment — Compliant Equity Management",
    subheadline: "Legally transfer or issue new shares with accurate filings, updated registers, and valid share certificates.",
    overview: {
      para1: "Share allotment is the process by which a company issues new shares to investors or existing shareholders, increasing its paid-up capital. Share transfer is the process by which an existing shareholder transfers their shares to another person. Both events are governed by the Companies Act, 2013 and require formal documentation and ROC filings.",
      para2: "P.A.J & Co. manages the entire process — from drafting board resolutions and share transfer deeds to updating statutory registers and filing the requisite forms with the Registrar of Companies.",
    },
    benefits: [
      {
        title: "Legal Validity",
        detail: "Properly executed transfers and allotments ensure no disputes over ownership.",
      },
      {
        title: "ROC Compliance",
        detail: "Timely filing of PAS-3 and SH-4 prevents penalties and ensures clean records.",
      },
      {
        title: "Investor-Ready",
        detail: "Accurate share registers are critical for due diligence in fundraising rounds.",
      },
      {
        title: "Updated Share Certificates",
        detail: "New and cancelled share certificates are issued correctly and on time.",
      },
    ],
    processSteps: [
      {
        title: "Board Resolution for Allotment / Transfer",
        detail: "Pass a board resolution approving the allotment of new shares or acceptance of share transfer.",
      },
      {
        title: "Execute Transfer Deed (SH-4)",
        detail: "For transfers, execute the instrument of transfer in Form SH-4, duly stamped.",
      },
      {
        title: "Update Register of Members",
        detail: "Update the Register of Members (MGT-1) with the name of the allottee or transferee.",
      },
      {
        title: "Issue Share Certificates",
        detail: "Issue new share certificates within 2 months of allotment or 1 month of transfer registration.",
      },
      {
        title: "File PAS-3 with ROC",
        detail: "File Form PAS-3 with the ROC within 30 days of allotment, attaching the resolution and allotment list.",
      },
    ],
    documentsRequired: [
      {
        category: "For Share Allotment",
        documents: [
          "Board resolution for allotment",
          "List of allottees with share details",
          "Investment receipts / bank statements",
          "PAN and Aadhaar of allottees",
        ],
      },
      {
        category: "For Share Transfer",
        documents: [
          "Instrument of Transfer (SH-4) duly signed and stamped",
          "Original share certificate(s)",
          "PAN and Aadhaar of transferor and transferee",
          "NOC from transferor (if required by AOA)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Manage Your Equity Events Seamlessly",
      subline: "From allotment to transfer, P.A.J & Co. ensures every equity change is compliant and correctly recorded.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 17_MoaAoa
  {
    slug: "moa-aoa-alteration",
    category: "Event-Based Compliance",
    headline: "Alteration of MOA & AOA — Amend Your Company Constitution",
    subheadline: "Legally amend your company's Memorandum and Articles of Association with proper approvals and ROC filings.",
    overview: {
      para1: "The Memorandum of Association (MOA) and Articles of Association (AOA) are the foundational constitutional documents of a company. As your business evolves, you may need to alter these documents — to change the name, shift registered office, add new objects, modify authorised capital, or amend governance rules.",
      para2: "Alterations require a Special Resolution passed by shareholders at a general meeting, followed by filing with the Registrar of Companies within 30 days. P.A.J & Co. guides you through every step — from drafting the amended clauses to filing the altered documents with the ROC.",
    },
    benefits: [
      {
        title: "Business Flexibility",
        detail: "Alter your objects clause to legally expand into new business verticals.",
      },
      {
        title: "Regulatory Compliance",
        detail: "Special Resolutions and ROC filings ensure amendments are legally valid and binding.",
      },
      {
        title: "Investor Alignment",
        detail: "Updated AOA can include investor-friendly provisions for fundraising rounds.",
      },
      {
        title: "Corporate Governance",
        detail: "Keep your governance documents current and aligned with your actual operations.",
      },
    ],
    processSteps: [
      {
        title: "Identify the Alteration Required",
        detail: "Determine the specific clause(s) in the MOA or AOA to be altered — objects, name, share capital, or governance.",
      },
      {
        title: "Draft Amended Clauses",
        detail: "Legal professionals draft the new wording ensuring compliance with the Companies Act, 2013.",
      },
      {
        title: "Board Meeting",
        detail: "Pass a board resolution recommending the alteration to shareholders.",
      },
      {
        title: "EGM / Postal Ballot",
        detail: "Pass a Special Resolution at an Extraordinary General Meeting or via postal ballot.",
      },
      {
        title: "File MGT-14 & INC-27 / SH-7",
        detail: "File the Special Resolution (MGT-14) and the alteration form within 30 days.",
      },
      {
        title: "Receive Altered Documents",
        detail: "The ROC certifies and registers the altered MOA or AOA.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Existing MOA and AOA",
          "Draft amended clauses",
          "Board resolution",
          "Notice of EGM with explanatory statement",
          "Minutes of EGM / postal ballot results",
          "Digital Signature Certificate of authorised director",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Adapt Your Company's Constitution to Your Growth",
      subline: "P.A.J & Co. ensures your MOA and AOA amendments are legally sound and ROC-compliant.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 18_RegOff
  {
    slug: "change-of-registered-office",
    category: "Event-Based Compliance",
    headline: "Change of Registered Office — Hassle-Free Address Update",
    subheadline: "Relocate your company's registered office within the same city, state, or across states with complete ROC compliance.",
    overview: {
      para1: "A company's registered office is its official legal address for all communications from the MCA, ROC, courts, and tax authorities. Any change — whether within the same city, to another city in the same state, or to another state entirely — requires formal filings under the Companies Act, 2013.",
      para2: "The process differs based on the nature of the change: within the same city requires a board resolution and INC-22 filing; shifting to another city in the same state additionally requires a Special Resolution; and inter-state shift requires Regional Director approval via INC-23.",
    },
    benefits: [
      {
        title: "Legal Address Update",
        detail: "Ensure all statutory notices and communications reach you at the correct address.",
      },
      {
        title: "Avoid Penalties",
        detail: "Unregistered address changes can attract MCA notices and significant fines.",
      },
      {
        title: "Business Continuity",
        detail: "Maintain seamless compliance across the address transition.",
      },
      {
        title: "Inter-State Handling",
        detail: "We handle complex inter-state shifts including Regional Director approvals.",
      },
    ],
    processSteps: [
      {
        title: "Board Resolution",
        detail: "Pass a board resolution for change of registered office — applicable in all cases.",
      },
      {
        title: "Special Resolution (if required)",
        detail: "If shifting outside the city or local limits, pass a Special Resolution by shareholders.",
      },
      {
        title: "File INC-22 with ROC",
        detail: "File Form INC-22 within 30 days of the change with proof of new address.",
      },
      {
        title: "Regional Director Approval (inter-state)",
        detail: "For inter-state shifts, file INC-23 with the Regional Director and await approval before filing with ROC.",
      },
      {
        title: "Update Other Registrations",
        detail: "Update GST, PAN, and other licences with the new address.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Board resolution for change of registered office",
          "Special Resolution (if applicable)",
          "Proof of new registered office (utility bill / ownership proof)",
          "NOC from property owner",
          "Rent agreement (if applicable)",
          "Digital Signature Certificate of authorised director",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Relocate Your Registered Office the Right Way",
      subline: "P.A.J & Co. manages your entire address change process — from resolution to ROC approval.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 19_Auditor
  {
    slug: "change-of-auditor",
    category: "Event-Based Compliance",
    headline: "Change of Auditor — Seamless Statutory Transition",
    subheadline: "Appoint, reappoint, or change your statutory auditor in compliance with the Companies Act, 2013.",
    overview: {
      para1: "Every company must appoint a qualified Chartered Accountant (CA) or CA firm as its statutory auditor. Auditor changes may arise due to mandatory rotation (every 5 years for listed companies), resignation, removal, or natural expiry of tenure. Each scenario requires specific compliance steps and ROC filings.",
      para2: "P.A.J & Co. ensures that the transition — whether appointment, resignation, or removal — is handled with proper shareholder resolutions, ADT-1 filings, and SEBI intimations where applicable.",
    },
    benefits: [
      {
        title: "Mandatory Rotation Compliance",
        detail: "Avoid penalties by complying with mandatory auditor rotation norms for applicable companies.",
      },
      {
        title: "Clean Audit Trail",
        detail: "Proper filings ensure no gaps or disputes in your audit history.",
      },
      {
        title: "Regulatory Adherence",
        detail: "MCA and SEBI require timely intimation of every auditor change.",
      },
      {
        title: "Risk Mitigation",
        detail: "Correctly managed transitions prevent scrutiny from regulators.",
      },
    ],
    processSteps: [
      {
        title: "Identify the Reason for Change",
        detail: "Determine whether the change is due to rotation, resignation, removal, or casual vacancy.",
      },
      {
        title: "Obtain Consent from Incoming Auditor",
        detail: "Receive written consent and eligibility certificate from the new auditor as per Section 139.",
      },
      {
        title: "Pass Board / Shareholder Resolution",
        detail: "Board recommends; shareholders approve at AGM or EGM.",
      },
      {
        title: "Notify Outgoing Auditor",
        detail: "Send formal written notice to the resigning or outgoing auditor.",
      },
      {
        title: "File ADT-1 with ROC",
        detail: "File Form ADT-1 within 15 days of appointment of the new auditor.",
      },
      {
        title: "Intimate SEBI (if listed)",
        detail: "Listed companies must notify the stock exchange and SEBI of the auditor change.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Consent letter from incoming auditor",
          "Certificate of eligibility from incoming auditor",
          "Resignation letter from outgoing auditor (if applicable)",
          "Board and shareholder resolution",
          "Notice of AGM / EGM",
          "Digital Signature Certificate",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Manage Your Auditor Change Without Disruption",
      subline: "P.A.J & Co. handles every auditor transition professionally and on time.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 20_AuthCap
  {
    slug: "increase-authorised-capital",
    category: "Event-Based Compliance",
    headline: "Increase Authorised Share Capital — Enable Future Growth",
    subheadline: "Expand your company's share capital ceiling to issue new shares for fundraising or promoter infusion.",
    overview: {
      para1: "The Authorised Share Capital is the maximum amount of share capital a company is legally permitted to issue. Before issuing new shares beyond the existing limit — for funding rounds, ESOP pools, or bonus shares — the authorised capital must first be increased.",
      para2: "The process requires altering the Memorandum of Association (Capital Clause), passing a resolution, and filing Form SH-7 with the Registrar of Companies. An authorised capital fee is also payable to the MCA based on the amount of increase.",
    },
    benefits: [
      {
        title: "Enables New Share Issuances",
        detail: "A higher authorised capital ceiling allows issuance of shares to investors without delay.",
      },
      {
        title: "Attracts Investors",
        detail: "Demonstrates readiness for equity financing and growth capital.",
      },
      {
        title: "ESOP Pool Creation",
        detail: "Required before creating or expanding an Employee Stock Option Plan.",
      },
      {
        title: "Bonus Share Eligibility",
        detail: "Increased authorised capital is a prerequisite for issuing bonus shares.",
      },
    ],
    processSteps: [
      {
        title: "Board Meeting",
        detail: "Pass a board resolution recommending the increase in authorised capital and convening an EGM.",
      },
      {
        title: "EGM / Ordinary Resolution",
        detail: "Pass an Ordinary Resolution (or Special Resolution if AOA requires) in the General Meeting.",
      },
      {
        title: "Pay MCA Stamp Duty",
        detail: "Pay the applicable ROC fee and stamp duty based on the amount of increase.",
      },
      {
        title: "File SH-7 with ROC",
        detail: "File Form SH-7 with the altered MOA within 30 days of resolution.",
      },
      {
        title: "File MGT-14",
        detail: "File the Special Resolution (if passed) via Form MGT-14 within 30 days.",
      },
      {
        title: "Issue New Shares",
        detail: "Once authorised capital is increased and ROC confirms, proceed with the actual allotment.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Existing MOA (Capital Clause)",
          "Board resolution",
          "Notice of EGM with explanatory statement",
          "Minutes of EGM",
          "Payment receipt of MCA stamp duty",
          "Digital Signature Certificate of authorised director",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Unlock Your Company's Capital Potential",
      subline: "P.A.J & Co. manages the entire authorised capital increase process — fast, accurate, and compliant.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 21_NameChange
  {
    slug: "company-name-change",
    category: "Event-Based Compliance",
    headline: "Change of Company Name — Rebrand with Full Compliance",
    subheadline: "Rename your company legally with ROC approval, updated MCA records, and revised statutory documents.",
    overview: {
      para1: "A company may decide to change its name to reflect a new brand identity, business pivot, or shareholder decision. Under the Companies Act, 2013, a name change requires a Special Resolution of shareholders and prior approval of the Registrar of Companies through Form INC-24.",
      para2: "P.A.J & Co. handles name availability searches, drafts the new MOA and AOA with the revised name, and completes all ROC filings — delivering a new Certificate of Incorporation in the changed name.",
    },
    benefits: [
      {
        title: "Reflects New Brand Identity",
        detail: "Legally align your corporate name with your brand, product, or market positioning.",
      },
      {
        title: "ROC Approved",
        detail: "All name changes are subject to ROC approval — ensuring uniqueness and compliance.",
      },
      {
        title: "Updated Statutory Documents",
        detail: "Receive updated Certificate of Incorporation, MOA, AOA, and CIN with new name.",
      },
      {
        title: "Third-Party Notifications",
        detail: "We guide you on informing banks, GST, PAN, and other authorities of the change.",
      },
    ],
    processSteps: [
      {
        title: "Check Name Availability",
        detail: "Search the MCA database to confirm the new name is available, unique, and compliant with naming guidelines.",
      },
      {
        title: "Board Resolution",
        detail: "Pass a board resolution recommending the name change to shareholders.",
      },
      {
        title: "Special Resolution at EGM",
        detail: "Pass a Special Resolution approving the name change at an Extraordinary General Meeting.",
      },
      {
        title: "File INC-24 with ROC",
        detail: "File Form INC-24 along with the Special Resolution and MGT-14 within 30 days.",
      },
      {
        title: "Receive Approval & New COI",
        detail: "The ROC approves the name change and issues a new Certificate of Incorporation.",
      },
      {
        title: "Update All Registrations",
        detail: "Update name in GST, PAN/TAN, bank accounts, and other licences.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Existing Certificate of Incorporation",
          "Existing MOA and AOA",
          "Board resolution",
          "Notice of EGM and minutes",
          "Special Resolution",
          "Digital Signature Certificate",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Rename Your Company the Right Way",
      subline: "P.A.J & Co. makes your company name change seamless — from ROC approval to updated documents.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 22_BoardMeet
  {
    slug: "board-meeting-notices-minutes",
    category: "Ongoing Secretarial Support",
    headline: "Board Meeting Notices & Minutes — Complete Secretarial Support",
    subheadline: "Professionally drafted board meeting notices, agenda, resolutions, and minutes — every meeting legally compliant.",
    overview: {
      para1: "Under the Companies Act, 2013, a company must hold a minimum number of board meetings each year with proper notice, quorum, and recorded minutes. Every board meeting must be preceded by a formal notice issued at least 7 days in advance, and minutes must be prepared and signed within 30 days of the meeting.",
      para2: "P.A.J & Co. provides end-to-end secretarial support — from preparing and issuing board meeting notices and agenda, to drafting resolutions and board minutes that comply with Secretarial Standards issued by the ICSI (SS-1).",
    },
    benefits: [
      {
        title: "Statutory Compliance",
        detail: "Ensures your board meetings meet minimum frequency and documentation requirements under the Act.",
      },
      {
        title: "SS-1 Compliant",
        detail: "Minutes and notices comply with ICSI Secretarial Standard 1 (SS-1).",
      },
      {
        title: "Audit-Ready Documentation",
        detail: "Professionally prepared minutes withstand scrutiny during audits and due diligence.",
      },
      {
        title: "Director Accountability",
        detail: "Clear agenda and resolution records protect directors from personal liability disputes.",
      },
      {
        title: "Focus on Governance",
        detail: "We handle the paperwork so your board can focus on decisions.",
      },
    ],
    processSteps: [
      {
        title: "Prepare Meeting Notice & Agenda",
        detail: "Draft a formal board meeting notice with the proposed agenda, dispatched to all directors at least 7 days in advance.",
      },
      {
        title: "Ensure Quorum",
        detail: "Confirm the minimum number of directors required for quorum will be present.",
      },
      {
        title: "Conduct the Meeting",
        detail: "Facilitate the meeting with proper minutes-taker. Resolutions are proposed, discussed, and voted on.",
      },
      {
        title: "Draft Board Minutes",
        detail: "Prepare detailed minutes capturing discussions, resolutions passed, dissents, and attendance within 15 days.",
      },
      {
        title: "Review & Sign Minutes",
        detail: "Minutes are approved and signed by the Chairperson within 30 days.",
      },
      {
        title: "Maintain Minute Book",
        detail: "File the signed minutes in the company Minute Book as per legal requirements.",
      },
    ],
    documentsRequired: [
      {
        category: "Information Required from Company",
        documents: [
          "List of board directors and their contact details",
          "Proposed agenda items",
          "Date, time, and venue of the meeting",
          "Copies of financial statements or documents to be tabled",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Never Miss a Compliance Step in Your Board Meetings",
      subline: "P.A.J & Co. handles all your board meeting documentation so every meeting is compliant and properly recorded.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 23_StatReg
  {
    slug: "statutory-registers-maintenance",
    category: "Ongoing Secretarial Support",
    headline: "Maintenance of Statutory Registers — Always Audit-Ready",
    subheadline: "Keep your company's mandatory registers updated, accurate, and available for inspection at all times.",
    overview: {
      para1: "The Companies Act, 2013 mandates that every company maintain a comprehensive set of statutory registers at its registered office. These include the Register of Members, Register of Directors, Register of Charges, Register of Loans, Register of Contracts, and several others.",
      para2: "Failure to maintain these registers or keeping them inaccurate attracts significant penalties under the Act. P.A.J & Co. undertakes the systematic maintenance, periodic updating, and audit-ready organisation of all your mandatory statutory registers.",
    },
    benefits: [
      {
        title: "Legal Obligation",
        detail: "Maintaining statutory registers is a mandatory requirement under the Companies Act, 2013.",
      },
      {
        title: "Penalty Avoidance",
        detail: "Avoid fines for non-maintenance or improper upkeep of registers.",
      },
      {
        title: "Investor Due Diligence Ready",
        detail: "Clean, updated registers are the first thing investors and auditors inspect.",
      },
      {
        title: "ROC Inspection Compliance",
        detail: "Registers must be available for inspection by directors, shareholders, and ROC officials.",
      },
      {
        title: "Digital & Physical Formats",
        detail: "We maintain registers in compliant digital and physical formats.",
      },
    ],
    processSteps: [
      {
        title: "Registers Audit & Gap Analysis",
        detail: "Review existing registers to identify missing entries, outdated information, or format non-compliance.",
      },
      {
        title: "Set Up / Reformat Registers",
        detail: "Create or reformat all required registers in prescribed formats.",
      },
      {
        title: "Data Entry & Updating",
        detail: "Enter all historical and current data accurately into each register.",
      },
      {
        title: "Periodic Review",
        detail: "Review and update registers after every event — share allotment, director change, charge creation, etc.",
      },
      {
        title: "Arrange for Inspection Readiness",
        detail: "Ensure registers are accessible, indexed, and available for shareholder or ROC inspection.",
      },
    ],
    documentsRequired: [
      {
        category: "Registers Maintained",
        documents: [
          "Register of Members (MGT-1)",
          "Register of Directors & KMP",
          "Register of Charges (CHG-7)",
          "Register of Loans & Guarantees",
          "Register of Contracts (MBP-4)",
          "Register of Investments",
          "Register of Beneficial Owners",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Keep Your Statutory Registers in Perfect Order",
      subline: "P.A.J & Co. maintains all your mandatory registers — so you're always inspection-ready.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 24_DirKYC
  {
    slug: "director-kyc-disqualification",
    category: "Ongoing Secretarial Support",
    headline: "Director KYC & Disqualification Check — Protect Your Directorship",
    subheadline: "File DIR-3 KYC annually and verify your director status to avoid DIN deactivation and disqualification.",
    overview: {
      para1: "Every director who has been allotted a Director Identification Number (DIN) must file Form DIR-3 KYC (or DIR-3 KYC Web) by 30th September every year. Failure to file results in deactivation of the DIN, which prevents the director from acting in any capacity or signing any MCA form.",
      para2: "Additionally, directors of companies that have defaulted in filing annual returns for three or more consecutive years are disqualified under Section 164(2). P.A.J & Co. provides a complete DIR-3 KYC filing service and detailed disqualification status check.",
    },
    benefits: [
      {
        title: "Avoid DIN Deactivation",
        detail: "Annual KYC filing keeps your DIN active and prevents disruption to all your corporate roles.",
      },
      {
        title: "Disqualification Monitoring",
        detail: "Regular checks help directors identify and address disqualification risks before they escalate.",
      },
      {
        title: "Penalty Prevention",
        detail: "Avoid the late fee of Rs.5,000 for belated DIR-3 KYC filings.",
      },
      {
        title: "Multiple Directorship Protection",
        detail: "If you hold directorships in multiple companies, a deactivated DIN affects all of them.",
      },
    ],
    processSteps: [
      {
        title: "Collect Director KYC Details",
        detail: "Gather PAN, Aadhaar, mobile number, email ID, and address proof of the director.",
      },
      {
        title: "Mobile & Email OTP Verification",
        detail: "The DIR-3 KYC process requires OTP verification on the registered mobile and email.",
      },
      {
        title: "DSC Authentication",
        detail: "File DIR-3 KYC with the director Digital Signature Certificate on the MCA portal.",
      },
      {
        title: "Disqualification Status Check",
        detail: "Cross-verify the director DIN against the MCA disqualification list under Section 164.",
      },
      {
        title: "De-activation Reversal (if applicable)",
        detail: "If the DIN is deactivated, file DIR-3 KYC with late fee and apply for reactivation.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "PAN Card of director",
          "Aadhaar Card of director",
          "Personal mobile number and email ID (for OTP)",
          "Passport-size photograph",
          "Address proof (utility bill not older than 2 months)",
          "Digital Signature Certificate (Class 3)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Keep Your Director Status Active & Compliant",
      subline: "P.A.J & Co. files your DIR-3 KYC on time, every year — and monitors your disqualification status.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 25_ROCFilings
  {
    slug: "roc-event-based-filings",
    category: "Ongoing Secretarial Support",
    headline: "ROC Event-Based Filings — Never Miss a Deadline",
    subheadline: "Timely and accurate filing of all event-based MCA forms to keep your company compliant and penalty-free.",
    overview: {
      para1: "Beyond annual filings, every corporate event — a new loan, creation of charge, appointment of a key managerial person, allotment of shares, or any change in capital — triggers a specific MCA form filing. These event-based filings have strict deadlines ranging from 15 to 60 days, and delays attract significant additional fees.",
      para2: "P.A.J & Co. monitors all corporate events, identifies applicable forms, and ensures every filing is completed accurately within the statutory deadline — protecting your company from penalties and ROC notices.",
    },
    benefits: [
      {
        title: "Penalty Prevention",
        detail: "Timely event-based filings avoid the exponentially increasing additional fee structure under MCA.",
      },
      {
        title: "Clean ROC Record",
        detail: "An unblemished MCA filing history builds confidence during audits, loans, and M&A.",
      },
      {
        title: "Comprehensive Coverage",
        detail: "We track and file all applicable forms across MCA21, SEBI, and RBI where relevant.",
      },
      {
        title: "Expert Drafting",
        detail: "Resolutions, explanatory statements, and supporting documents are drafted professionally.",
      },
    ],
    processSteps: [
      {
        title: "Event Identification",
        detail: "Identify the corporate event and determine the applicable MCA form(s) and filing deadline.",
      },
      {
        title: "Document Collection",
        detail: "Collect all supporting documents — resolutions, consent letters, contracts, etc.",
      },
      {
        title: "Drafting & Review",
        detail: "Draft the filing content and supporting documents for accuracy and legal compliance.",
      },
      {
        title: "DSC Authentication & Filing",
        detail: "Authenticate with the authorised director DSC and file on the MCA21 portal.",
      },
      {
        title: "Track Approval & SRN",
        detail: "Monitor submission status and share the Service Request Number (SRN) and acknowledgement.",
      },
    ],
    documentsRequired: [
      {
        category: "Common Event-Based Forms Filed",
        documents: [
          "Form MGT-14 – Resolutions and agreements",
          "Form DIR-12 – Director changes",
          "Form PAS-3 – Share allotment",
          "Form SH-7 – Increase in share capital",
          "Form CHG-1 – Creation or modification of charge",
          "Form ADT-1 – Auditor appointment",
          "Form INC-22 – Change of registered office",
          "Form BEN-2 – Significant beneficial ownership",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Stay on Top of Every Corporate Event Filing",
      subline: "P.A.J & Co. ensures every MCA event-based form is filed correctly and on time.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 26_SecAudit
  {
    slug: "secretarial-audit",
    category: "Ongoing Secretarial Support",
    headline: "Secretarial Audit — Independent Compliance Assurance",
    subheadline: "A mandatory independent review of your company's compliance health — conducted by a Practicing Company Secretary.",
    overview: {
      para1: "A Secretarial Audit is an independent examination of a company's compliance with the Companies Act, 2013, SEBI regulations, FEMA provisions, and other applicable laws. It is mandatory for listed companies, public companies with paid-up capital of Rs.50 crore or more, and public companies with turnover of Rs.250 crore or more.",
      para2: "The audit is conducted by a Practicing Company Secretary (PCS) and the results are presented in Form MR-3, which is annexed to the Board Report. P.A.J & Co. provides thorough secretarial audit services, identifying compliance gaps and providing actionable recommendations.",
    },
    benefits: [
      {
        title: "Mandatory Compliance",
        detail: "Avoid penalties under Section 204 for non-compliance with secretarial audit requirements.",
      },
      {
        title: "Early Risk Detection",
        detail: "Identify compliance weaknesses before they attract regulatory action.",
      },
      {
        title: "Board Report Annexure",
        detail: "Clean secretarial audit report enhances the credibility of your Annual Report.",
      },
      {
        title: "Investor & Lender Confidence",
        detail: "Third-party compliance certification builds institutional investor trust.",
      },
      {
        title: "Covers Multiple Laws",
        detail: "Examines compliance under Companies Act, SEBI LODR, FEMA, SCRA, and sector-specific laws.",
      },
    ],
    processSteps: [
      {
        title: "Engagement & Scope Finalisation",
        detail: "Define the audit scope based on applicable laws — Companies Act, SEBI regulations, FEMA, etc.",
      },
      {
        title: "Document & Data Collection",
        detail: "Gather all statutory registers, board minutes, annual filings, contracts, and correspondence.",
      },
      {
        title: "Compliance Review",
        detail: "Systematically verify compliance across all applicable sections and regulations.",
      },
      {
        title: "Preparation of Draft Report",
        detail: "Draft the Secretarial Audit Report in Form MR-3 with observations and qualifications.",
      },
      {
        title: "Discussion with Management",
        detail: "Present findings to the management and board for response and clarification.",
      },
      {
        title: "Final Report Issuance",
        detail: "Issue the signed final MR-3 report for annexure to the Board Report.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required for Audit",
        documents: [
          "All MCA filings and SRNs for the year",
          "Board and committee meeting notices, agenda, and minutes",
          "Statutory registers (all types)",
          "Shareholder meeting notices and minutes",
          "Annual Return (MGT-7) and Financial Statements (AOC-4)",
          "All event-based forms filed during the year",
          "Contracts, loan agreements, and charge documents",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Ensure Your Company Passes Every Compliance Test",
      subline: "P.A.J & Co. conducts thorough secretarial audits that give your board and investors full confidence.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 27_AOC4
  {
    slug: "aoc-4-filing",
    category: "Annual Compliance",
    headline: "AOC-4 Filing — Annual Financial Statements on Time",
    subheadline: "File your company's audited financial statements with the ROC every year — accurately and before the deadline.",
    overview: {
      para1: "Every company registered under the Companies Act, 2013 must file its audited Balance Sheet, Profit & Loss Account, Directors Report, and Auditors Report with the Registrar of Companies annually through Form AOC-4. The deadline is 30 days from the conclusion of the Annual General Meeting (AGM).",
      para2: "Late filing attracts an additional fee of Rs.100 per day per form. Persistent default can lead to company strike-off and director disqualification. P.A.J & Co. ensures your AOC-4 is accurately prepared, reviewed, and filed well before the deadline.",
    },
    benefits: [
      {
        title: "Mandatory Annual Filing",
        detail: "AOC-4 is a non-negotiable statutory obligation for all registered companies.",
      },
      {
        title: "Avoid Penalty",
        detail: "Timely filing prevents the Rs.100/day additional fee and ROC notices.",
      },
      {
        title: "Director Protection",
        detail: "Prevents director disqualification under Section 164(2).",
      },
      {
        title: "Lender & Investor Visibility",
        detail: "Filed financial statements are publicly accessible — demonstrating financial transparency.",
      },
      {
        title: "MCA21 Compliance",
        detail: "All filings on MCA21 portal with DSC authentication and acknowledgement.",
      },
    ],
    processSteps: [
      {
        title: "Collect Audited Financial Statements",
        detail: "Obtain the signed and audited Balance Sheet, P&L Account, and all schedules from the statutory auditor.",
      },
      {
        title: "Prepare Attachments",
        detail: "Compile the Auditors Report, Directors Report, and Board Report annexures.",
      },
      {
        title: "Conduct AGM",
        detail: "Financial statements must be adopted at the AGM before filing with the ROC.",
      },
      {
        title: "Prepare Form AOC-4",
        detail: "Complete the AOC-4 form on the MCA21 portal with all financial data and attachments.",
      },
      {
        title: "DSC Authentication & Filing",
        detail: "File the form authenticated with the authorised director and professional DSC.",
      },
      {
        title: "Track Approval & SRN",
        detail: "Obtain SRN and acknowledgement; monitor filing status on MCA21.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Audited Balance Sheet",
          "Audited Profit & Loss Account with notes",
          "Cash Flow Statement",
          "Auditors Report",
          "Directors Report with annexures",
          "Board resolution for adoption of financial statements",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "File Your Financial Statements Without Stress",
      subline: "P.A.J & Co. prepares and files your AOC-4 accurately and on time, every financial year.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 28_MGT7
  {
    slug: "mgt-7-annual-return",
    category: "Annual Compliance",
    headline: "MGT-7 / MGT-7A Filing — Annual Return Compliance",
    subheadline: "File your company's Annual Return with the ROC to maintain a clean compliance record and avoid penalties.",
    overview: {
      para1: "Every company must file its Annual Return in Form MGT-7 (or MGT-7A for small companies and OPCs) with the Registrar of Companies within 60 days of the conclusion of its AGM. The Annual Return is a snapshot of the company shareholder structure, board composition, board meetings, and compliance status as at the financial year end.",
      para2: "Form MGT-7A is a simplified Annual Return for small companies and One Person Companies. P.A.J & Co. prepares and files your Annual Return accurately, ensuring consistency with your MCA records and statutory registers.",
    },
    benefits: [
      {
        title: "Mandatory Annual Filing",
        detail: "Annual Return is a statutory requirement for all companies regardless of size or turnover.",
      },
      {
        title: "Avoids Rs.100/Day Penalty",
        detail: "Late filing beyond 60 days of AGM conclusion attracts Rs.100/day additional fee.",
      },
      {
        title: "Director Disqualification Risk",
        detail: "Default in annual return filing for 3+ years leads to director disqualification.",
      },
      {
        title: "Public Record of Governance",
        detail: "Annual Returns are publicly available on MCA and build stakeholder confidence.",
      },
      {
        title: "Seamless ROC Compliance",
        detail: "Accurate MGT-7 filing keeps your company ROC record clean.",
      },
    ],
    processSteps: [
      {
        title: "Collect Shareholder & Director Data",
        detail: "Gather details of all shareholders, directors, KMPs, and board meetings held during the year.",
      },
      {
        title: "Reconcile with Statutory Registers",
        detail: "Cross-verify with Register of Members, Register of Directors, and Board Minutes for accuracy.",
      },
      {
        title: "Prepare MGT-7 / MGT-7A",
        detail: "Draft the Annual Return with all required disclosures — shareholding pattern, board changes, penalties if any.",
      },
      {
        title: "Certification (if required)",
        detail: "MGT-7 for applicable companies must be certified by a Practicing Company Secretary.",
      },
      {
        title: "DSC Authentication & Filing",
        detail: "File on MCA21 with the authorised director DSC.",
      },
      {
        title: "Track Approval & SRN",
        detail: "Obtain acknowledgement and SRN for record-keeping.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "List of shareholders with shareholding details at year end",
          "List of directors and KMPs with appointment or resignation dates",
          "Number of board meetings held with attendance details",
          "Details of charges, loans, and contracts",
          "AGM date and place",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "File Your Annual Return Accurately and On Time",
      subline: "P.A.J & Co. prepares your MGT-7 / MGT-7A with precision — keeping your ROC record spotless.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 29_ADT1
  {
    slug: "adt-1-msme-annual-filing",
    category: "Annual Compliance",
    headline: "ADT-1 & MSME Annual Filing — Complete Annual Compliance",
    subheadline: "Timely filing of auditor appointment returns and MSME outstanding payment disclosures every financial year.",
    overview: {
      para1: "Form ADT-1 must be filed within 15 days of the AGM at which the statutory auditor is appointed or reappointed, confirming the appointment to the ROC. Separately, all companies with outstanding dues to MSME vendors beyond 45 days must file a half-yearly MSME Form I return with the ROC.",
      para2: "These are often overlooked filings that attract disproportionate penalties for non-compliance. P.A.J & Co. tracks both obligations and ensures they are filed correctly within their respective deadlines.",
    },
    benefits: [
      {
        title: "ADT-1 Penalty Avoidance",
        detail: "Timely ADT-1 filing avoids Rs.300/day penalty for late auditor intimation.",
      },
      {
        title: "MSME Payment Compliance",
        detail: "MSME Form I ensures compliance with the MSMED Act and avoids interest penalty on delayed MSME payments.",
      },
      {
        title: "Dual Obligation Management",
        detail: "Two separate obligations tracked and filed as part of a single annual compliance package.",
      },
      {
        title: "Vendor Relationship Protection",
        detail: "MSME Form I demonstrates commitment to timely vendor payment obligations.",
      },
    ],
    processSteps: [
      {
        title: "Identify Auditor Appointment Details",
        detail: "Confirm auditor name, firm registration number, tenure, and AGM date.",
      },
      {
        title: "File ADT-1 within 15 Days of AGM",
        detail: "File Form ADT-1 on the MCA portal within 15 days of AGM conclusion.",
      },
      {
        title: "Identify Outstanding MSME Dues",
        detail: "Review accounts payable to identify MSME/Udyam registered vendors with dues outstanding beyond 45 days.",
      },
      {
        title: "Prepare MSME Form I",
        detail: "Prepare the half-yearly MSME Form I return with details of outstanding MSME dues.",
      },
      {
        title: "File MSME Form I",
        detail: "File with ROC by 31st October (April–September half) and 30th April (October–March half).",
      },
    ],
    documentsRequired: [
      {
        category: "For ADT-1",
        documents: [
          "Auditor appointment resolution from AGM minutes",
          "Auditor consent letter and eligibility certificate",
          "Firm registration number and PAN of auditor",
        ],
      },
      {
        category: "For MSME Form I",
        documents: [
          "List of MSME vendors with Udyam Registration Numbers",
          "Outstanding invoice details with dates",
          "Payment history and bank statements",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Manage Your Annual Filing Obligations with Ease",
      subline: "P.A.J & Co. tracks and files ADT-1 and MSME Form I so you never miss these critical deadlines.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 30_Compound
  {
    slug: "compounding-of-offences",
    category: "Annual Compliance",
    headline: "Compounding of Offences — Regularise Past Compliance Lapses",
    subheadline: "Settle past MCA violations through the compounding process and restore your company's compliance standing.",
    overview: {
      para1: "Compounding of offences under Section 441 of the Companies Act, 2013 is a legal mechanism that allows companies and officers to pay a prescribed sum to settle non-cognizable offences — such as delayed filings or procedural violations — without undergoing criminal prosecution.",
      para2: "The compounding application is made to the Regional Director (for offences punishable with fine only) or the NCLT (for more serious offences). P.A.J & Co. assists in identifying compoundable offences, preparing the application, and representing the matter before the appropriate authority.",
    },
    benefits: [
      {
        title: "Avoid Criminal Prosecution",
        detail: "Compounding settles the offence without going through criminal courts.",
      },
      {
        title: "Restore Compliance Status",
        detail: "Eliminates disqualification triggers and restores clean MCA records.",
      },
      {
        title: "Director Protection",
        detail: "Protects directors from personal liability for past company defaults.",
      },
      {
        title: "Enable Future Transactions",
        detail: "Clean compliance records are essential for bank loans, investor due diligence, and M&A.",
      },
    ],
    processSteps: [
      {
        title: "Offence Identification & Assessment",
        detail: "Review company MCA records to identify specific offences that can be compounded.",
      },
      {
        title: "Legal Assessment of Compoundability",
        detail: "Determine whether each offence is compoundable and the applicable authority — Regional Director or NCLT.",
      },
      {
        title: "Prepare Compounding Application",
        detail: "Draft the compounding petition with all supporting documents and grounds.",
      },
      {
        title: "Appear Before Authority",
        detail: "Represent before the Regional Director or NCLT as required.",
      },
      {
        title: "Pay Compounding Amount",
        detail: "Pay the compounding fee as ordered by the authority.",
      },
      {
        title: "File Compliance Report with ROC",
        detail: "File necessary forms and compliance reports confirming settlement of the offence.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Details of the specific offence (form name, event, date)",
          "List of directors and company registration details",
          "DSC of authorised director",
          "All past MCA filings related to the offence",
          "Board resolution authorising the compounding application",
          "Affidavit from the authorised director",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Regularise Your Compliance History with Expert Help",
      subline: "P.A.J & Co. handles compounding applications professionally — protecting your directors and restoring your company's standing.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 31_GSTReg
  {
    slug: "gst-registration",
    category: "GST Services",
    headline: "GST Registration — Get Your GSTIN in 3–5 Working Days",
    subheadline: "Mandatory registration for all businesses crossing the threshold — get registered quickly with expert guidance.",
    overview: {
      para1: "Goods and Services Tax (GST) is India unified indirect tax applicable on the supply of goods and services. Every business whose aggregate annual turnover exceeds Rs.40 lakh (Rs.20 lakh for service providers; Rs.10 lakh in special category states) must register under GST. Certain categories must register regardless of turnover — including e-commerce operators, inter-state suppliers, and casual taxable persons.",
      para2: "GST registration enables you to issue tax invoices, claim Input Tax Credit (ITC), and conduct inter-state business. P.A.J & Co. handles the entire registration process — from form preparation to GSTIN issuance.",
    },
    benefits: [
      {
        title: "Legal Compliance",
        detail: "Mandatory for businesses above the threshold — non-registration attracts heavy penalties.",
      },
      {
        title: "Input Tax Credit",
        detail: "Registered businesses can claim ITC on purchases, reducing overall tax outflow.",
      },
      {
        title: "Inter-State Business",
        detail: "GST registration is mandatory for any business making inter-state sales.",
      },
      {
        title: "Business Credibility",
        detail: "GSTIN enhances trust with B2B clients who require tax invoices.",
      },
      {
        title: "E-Commerce Selling",
        detail: "All sellers on Amazon, Flipkart, and other e-commerce platforms must be GST registered.",
      },
      {
        title: "Threshold Monitoring",
        detail: "We track your turnover and advise timely registration before violations occur.",
      },
    ],
    processSteps: [
      {
        title: "Determine Registration Type",
        detail: "Identify the applicable category — regular taxpayer, composition scheme, casual taxable person, or non-resident.",
      },
      {
        title: "Prepare GST Application (REG-01)",
        detail: "Complete the GST REG-01 application on the GSTN portal with all business and promoter details.",
      },
      {
        title: "Upload Documents",
        detail: "Upload identity, address proof, business proof, and bank account details.",
      },
      {
        title: "Submit & Track Application",
        detail: "Submit and track the status; respond to any queries from the GST officer.",
      },
      {
        title: "Receive GSTIN",
        detail: "Upon approval, receive the GSTIN (15-digit GST Identification Number) and registration certificate.",
      },
      {
        title: "Set Up GST Compliance Calendar",
        detail: "We brief you on your return filing obligations (GSTR-1, GSTR-3B) and set up your compliance calendar.",
      },
    ],
    documentsRequired: [
      {
        category: "For Proprietors / Partners / Directors",
        documents: [
          "PAN Card",
          "Aadhaar Card",
          "Passport-size photographs",
          "Mobile number and email ID",
        ],
      },
      {
        category: "For Business",
        documents: [
          "Certificate of Incorporation / Partnership deed",
          "Proof of principal place of business (utility bill or rent agreement)",
          "NOC from property owner",
          "Bank account details (cancelled cheque or bank statement)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Get Your GSTIN Without Hassle",
      subline: "P.A.J & Co. registers your business for GST quickly and sets you up for smooth monthly compliance.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 32_GSTReturns
  {
    slug: "gst-return-filing",
    category: "GST Services",
    headline: "GST Return Filing — GSTR-1 & GSTR-3B on Time, Every Month",
    subheadline: "Accurate and timely monthly/quarterly GST return filing to keep your ITC chain intact and avoid penalties.",
    overview: {
      para1: "Every GST-registered business must file periodic returns. GSTR-1 is the outward supply return where you report all sales invoices. GSTR-3B is the monthly summary return where you declare output tax liability, ITC claimed, and net GST payable. Timely and accurate filing of both is essential to maintain a clean GST compliance record.",
      para2: "Late filing of GSTR-3B attracts interest at 18% per annum on the tax payable, plus a late fee of Rs.50 per day (Rs.20 for NIL returns). P.A.J & Co. provides a managed GST return filing service — from data collection to reconciliation and filing.",
    },
    benefits: [
      {
        title: "Avoid Late Fees & Interest",
        detail: "Timely filing prevents interest at 18% p.a. and Rs.50/day late fees.",
      },
      {
        title: "Maintain ITC Eligibility",
        detail: "Your buyers can claim ITC only if your GSTR-1 is filed correctly — failure impacts business relationships.",
      },
      {
        title: "Input Tax Credit Optimisation",
        detail: "Accurate GSTR-3B filing ensures you claim all eligible ITC and reduce tax outflow.",
      },
      {
        title: "GST Compliance Rating",
        detail: "Consistent filing maintains your GST compliance rating visible on the portal.",
      },
      {
        title: "Avoid GST Notices",
        detail: "Missing or inconsistent returns trigger automated scrutiny and GST notices.",
      },
    ],
    processSteps: [
      {
        title: "Collect Sales & Purchase Data",
        detail: "Gather all sales invoices, credit notes, debit notes, and purchase invoices for the period.",
      },
      {
        title: "Reconcile Books with GST Portal",
        detail: "Match your books of accounts with GSTR-2B (auto-populated ITC) on the portal.",
      },
      {
        title: "Prepare GSTR-1",
        detail: "Enter all outward supply details in GSTR-1 — HSN-wise, invoice-wise, and B2B/B2C categorisation.",
      },
      {
        title: "Prepare GSTR-3B",
        detail: "Calculate output tax liability, eligible ITC, and net GST payable for the period.",
      },
      {
        title: "Review & Client Approval",
        detail: "Share the draft with you for review before filing.",
      },
      {
        title: "File & Make Payment",
        detail: "File both returns on the GST portal and arrange for tax payment via challan.",
      },
    ],
    documentsRequired: [
      {
        category: "Data Required Monthly",
        documents: [
          "All sales invoices (B2B and B2C)",
          "All purchase invoices with GST details",
          "Credit notes and debit notes",
          "E-way bill details (if applicable)",
          "Bank statements for reconciliation",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Never Miss a GST Filing Deadline",
      subline: "P.A.J & Co. manages your GSTR-1 and GSTR-3B filings every month — accurately and on time.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 33_GSTR9
  {
    slug: "gstr-9-annual-return",
    category: "GST Services",
    headline: "GSTR-9 Annual Return — Complete Your GST Year-End Filing",
    subheadline: "Summarise a full year of GST compliance in one comprehensive annual return — filed accurately and on time.",
    overview: {
      para1: "GSTR-9 is the annual GST return that consolidates all monthly and quarterly GSTR-1 and GSTR-3B filings for a financial year. It is mandatory for all regular taxpayers with aggregate turnover above Rs.2 crore. GSTR-9C (self-certified reconciliation) is required for taxpayers with turnover above Rs.5 crore.",
      para2: "The annual return involves reconciling your GSTR-1 and GSTR-3B filings with your books of accounts and audited financial statements — identifying any discrepancies, missed ITC reversals, or unclaimed credits. P.A.J & Co. provides a comprehensive GSTR-9 preparation and filing service.",
    },
    benefits: [
      {
        title: "Mandatory above Rs.2 Crore Turnover",
        detail: "Non-filing attracts Rs.200/day late fee (Rs.100 CGST + Rs.100 SGST).",
      },
      {
        title: "Year-End Reconciliation",
        detail: "Identifies discrepancies between GST returns and books before tax authorities do.",
      },
      {
        title: "ITC Correction Opportunity",
        detail: "Annual return allows adjustments for missed or incorrectly claimed ITC.",
      },
      {
        title: "GSTR-9C Compliance",
        detail: "Self-certified reconciliation required for taxpayers above Rs.5 crore.",
      },
    ],
    processSteps: [
      {
        title: "Compile Annual Sales & Purchase Data",
        detail: "Gather all outward and inward supply data for the full financial year.",
      },
      {
        title: "Reconcile with GSTR-1, GSTR-3B & Books",
        detail: "Identify and resolve discrepancies between monthly returns and books of accounts.",
      },
      {
        title: "Identify ITC Discrepancies",
        detail: "Compare GSTR-2B with books to identify unclaimed or excess ITC.",
      },
      {
        title: "Prepare GSTR-9",
        detail: "Compile all annual data in the prescribed format and check for consistency.",
      },
      {
        title: "Prepare GSTR-9C (if applicable)",
        detail: "Prepare the self-certified reconciliation statement matching GST returns to audited financials.",
      },
      {
        title: "File with Tax Payment (if any)",
        detail: "File GSTR-9 (and GSTR-9C) on the GST portal with any additional tax payment required.",
      },
    ],
    documentsRequired: [
      {
        category: "Data Required",
        documents: [
          "All monthly GSTR-1 and GSTR-3B filings for the year",
          "Audited financial statements (P&L and Balance Sheet)",
          "Purchase register with HSN codes",
          "Sales register with GST details",
          "Input Tax Credit workings from books",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Close Your GST Year Without Complications",
      subline: "P.A.J & Co. prepares and files your GSTR-9 and GSTR-9C with full reconciliation.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 34_GSTRefund
  {
    slug: "gst-refund-claims",
    category: "GST Services",
    headline: "GST Refund Claims — Recover Your Blocked GST Credits",
    subheadline: "Claim GST refunds on exports, inverted duty structures, or excess payments with expert assistance.",
    overview: {
      para1: "GST refunds arise in situations such as: exports of goods or services (zero-rated supplies), inverted duty structure (where input tax rate is higher than output tax rate), excess cash balance in electronic cash ledger, or incorrect payment. Refund claims must be filed in Form RFD-01 on the GST portal.",
      para2: "The refund processing timeline is 60 days from the date of filing. Delays beyond this period attract interest at 6% per annum. P.A.J & Co. prepares your refund application with complete documentation and follows up with the GST officer to secure your refund.",
    },
    benefits: [
      {
        title: "Recover Blocked Working Capital",
        detail: "Exports-related GST refunds can represent significant blocked working capital — claim them back.",
      },
      {
        title: "Inverted Duty Relief",
        detail: "Manufacturers and traders in sectors with inverted duty structure can claim refunds on accumulated ITC.",
      },
      {
        title: "Expert Claim Preparation",
        detail: "Incorrect refund claims lead to rejections — expert preparation improves approval rates.",
      },
      {
        title: "Officer Follow-Up",
        detail: "We track the status and respond to any queries from the GST officer on your behalf.",
      },
    ],
    processSteps: [
      {
        title: "Identify Refund Eligibility",
        detail: "Determine the category of refund — export refund (IGST paid or ITC), inverted duty, or excess payment.",
      },
      {
        title: "Compile Supporting Documents",
        detail: "Gather export invoices, shipping bills, bank realisation certificates, or other relevant documents.",
      },
      {
        title: "File RFD-01 Application",
        detail: "Submit the refund application in Form RFD-01 with all attachments.",
      },
      {
        title: "Respond to Officer Queries",
        detail: "Address any queries or deficiency memos from the GST officer within the prescribed time.",
      },
      {
        title: "Receive Refund Order",
        detail: "Upon approval, the refund is credited directly to your bank account.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "GST registration certificate",
          "Relevant GSTR-1 and GSTR-3B filings",
          "Export invoices and shipping bills (for export refunds)",
          "FIRC / BRIC (for service exports)",
          "Purchase invoices with GST details",
          "Statement of ITC availed vs. ITC utilised",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Get Your GST Refunds Processed Faster",
      subline: "P.A.J & Co. prepares and tracks your GST refund claims with precision.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 35_GSTNotice
  {
    slug: "gst-notice-handling",
    category: "GST Services",
    headline: "GST Notice Handling — Respond Confidently to Tax Authorities",
    subheadline: "Expert assistance to respond to GST notices, summons, scrutiny, and demand orders.",
    overview: {
      para1: "GST notices can arise from mismatches between GSTR-1 and GSTR-3B, ITC reversals, late or non-filing, excess ITC claims, or departmental scrutiny. Types include DRC-01 (demand and recovery notice), DRC-01A (intimation), scrutiny notices under Section 61, and summons under Section 70.",
      para2: "Failing to respond to a GST notice within the prescribed time leads to ex-parte orders and demand confirmation with interest and penalties. P.A.J & Co. reviews the notice, analyses the underlying issue, and prepares a detailed, legally sound reply on your behalf.",
    },
    benefits: [
      {
        title: "Expert Analysis",
        detail: "We review the notice and assess the basis of demand or query before responding.",
      },
      {
        title: "Legally Sound Replies",
        detail: "Responses are drafted with supporting case law, circulars, and factual documentation.",
      },
      {
        title: "Timely Response",
        detail: "All notices have strict response deadlines — we ensure responses are filed well within time.",
      },
      {
        title: "Demand Prevention",
        detail: "Proper responses prevent confirmation of erroneous demand orders.",
      },
    ],
    processSteps: [
      {
        title: "Receive & Analyse the Notice",
        detail: "Review the notice type, basis of demand or query, and deadline for response.",
      },
      {
        title: "Gather Supporting Documents",
        detail: "Collect all relevant invoices, returns, payment challans, and correspondence.",
      },
      {
        title: "Draft Response",
        detail: "Prepare a comprehensive reply with legal grounds, factual support, and documentary evidence.",
      },
      {
        title: "File Reply on GST Portal",
        detail: "Submit the reply on the GST portal (ADR reply, DRC-06, or other applicable form).",
      },
      {
        title: "Personal Hearing (if called)",
        detail: "Attend or represent at the personal hearing before the GST officer.",
      },
      {
        title: "Appeal (if required)",
        detail: "If the demand is confirmed incorrectly, initiate the appeal process before the Appellate Authority.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents to Share",
        documents: [
          "Copy of the GST notice (screenshot or PDF from portal)",
          "GST registration certificate",
          "Relevant GSTR-1, GSTR-3B, and GSTR-2B",
          "Purchase and sales invoices related to the notice period",
          "Payment challans and ITC workings",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Face GST Notices with Confidence",
      subline: "P.A.J & Co. handles all GST notices — from analysis to reply — so you're never caught off guard.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 36_DSC
  {
    slug: "dsc-issuance",
    category: "Digital Services",
    headline: "Digital Signature Certificate — Get Your Class 3 DSC Today",
    subheadline: "Mandatory for MCA filings, GST, income tax, tenders, and DGFT — issued within 24–48 hours.",
    overview: {
      para1: "A Digital Signature Certificate (DSC) is an electronic credential that validates the identity of the signer for digital filings and transactions. Class 3 DSC is the highest level, mandatory for all MCA portal filings, GST registrations, DGFT, income tax, e-tendering, and other government portals.",
      para2: "DSCs are issued by licensed Certifying Authorities (CAs) under the Information Technology Act, 2000. P.A.J & Co. facilitates Class 3 DSC issuance in both individual and organisation names — typically within 24–48 hours.",
    },
    benefits: [
      {
        title: "Mandatory for MCA Filings",
        detail: "All company registration, annual return, and event-based filings require a valid DSC.",
      },
      {
        title: "GST & Income Tax",
        detail: "Required for GST registration and income tax return filing for companies and auditors.",
      },
      {
        title: "DGFT & e-Tendering",
        detail: "Exporters and businesses participating in government tenders require DSC.",
      },
      {
        title: "Fast Issuance",
        detail: "Typically issued within 24–48 hours with proper documentation.",
      },
      {
        title: "2-Year Validity",
        detail: "Standard DSC validity is 2 years; renewable thereafter.",
      },
    ],
    processSteps: [
      {
        title: "Collect Identity Documents",
        detail: "Gather PAN, Aadhaar, and passport-size photograph of the applicant.",
      },
      {
        title: "Video Verification",
        detail: "Complete the mandatory video verification with the Certifying Authority.",
      },
      {
        title: "Submit Application",
        detail: "Submit the DSC application to the licensed Certifying Authority.",
      },
      {
        title: "Receive DSC Token",
        detail: "Receive the encrypted USB token (e-Token) containing the digital signature certificate.",
      },
      {
        title: "Configure for Use",
        detail: "Install required drivers and configure the DSC token for use on MCA, GST, and other portals.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "PAN Card of the applicant",
          "Aadhaar Card of the applicant",
          "Passport-size photograph",
          "Personal mobile number (for OTP verification)",
          "Personal email ID (for OTP verification)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Get Your Digital Signature Certificate Today",
      subline: "P.A.J & Co. facilitates fast DSC issuance — so you are ready for every digital filing.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 37_DSCRenew
  {
    slug: "dsc-renewal-upgrade",
    category: "Digital Services",
    headline: "DSC Renewal & Upgrade — Renew Before It Expires",
    subheadline: "Renew your expiring Digital Signature Certificate or upgrade to Class 3 — without operational disruption.",
    overview: {
      para1: "A Digital Signature Certificate has a validity of 2 years from the date of issuance. An expired DSC renders the user unable to file on MCA, GST, income tax, DGFT, and all other government portals. Renewal must be initiated before the expiry date to avoid any gap in digital filing capability.",
      para2: "Upgrading from an older DSC class to Class 3 is also frequently required as most portals now mandate Class 3. P.A.J & Co. manages the renewal or upgrade process with minimal documentation and fast turnaround.",
    },
    benefits: [
      {
        title: "Prevent Filing Disruptions",
        detail: "An expired DSC blocks all digital filings — renewing in advance avoids compliance gaps.",
      },
      {
        title: "Fast Renewal",
        detail: "Renewal typically completed within 24–48 hours.",
      },
      {
        title: "Upgrade to Class 3",
        detail: "We assist in seamlessly upgrading to Class 3 where required.",
      },
      {
        title: "New Token if Needed",
        detail: "Replace faulty or lost tokens along with renewal.",
      },
    ],
    processSteps: [
      {
        title: "Check DSC Expiry Date",
        detail: "Verify the expiry date on the existing DSC token or the issued certificate.",
      },
      {
        title: "Initiate Renewal 30 Days Before Expiry",
        detail: "Begin the renewal process at least 30 days before the certificate expires.",
      },
      {
        title: "Identity Re-Verification",
        detail: "Complete the video OTP verification process with the Certifying Authority.",
      },
      {
        title: "Receive Updated DSC",
        detail: "New certificate is loaded on the same token or a new token if the old one is faulty.",
      },
      {
        title: "Test & Configure",
        detail: "Verify the renewed DSC on all required portals before the old certificate expires.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "PAN Card of the applicant",
          "Aadhaar Card",
          "Existing DSC token (if available)",
          "Personal mobile number and email ID",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Renew Your DSC Before It Expires",
      subline: "P.A.J & Co. manages your DSC renewal quickly — so your digital filings are never disrupted.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 38_DPIIT
  {
    slug: "dpiit-startup-recognition",
    category: "Startup & Funding Support",
    headline: "DPIIT Startup Recognition — Unlock India's Startup Benefits",
    subheadline: "Get recognised as a Startup by DPIIT and unlock powerful government benefits including tax exemptions.",
    overview: {
      para1: "DPIIT Startup Recognition is a government certification for eligible early-stage companies. Recognised startups gain access to tax exemptions under Section 80-IAC, fast-track patent and trademark filing, easier compliance norms, and access to the Fund of Funds and other government schemes.",
      para2: "To be eligible, your company must be incorporated in India, be not older than 10 years, have annual turnover not exceeding Rs.100 crore in any financial year, and be working towards innovation, development, or improvement of products or services.",
    },
    benefits: [
      {
        title: "Income Tax Exemption",
        detail: "Section 80-IAC exemption on profits for 3 out of 10 years after incorporation.",
      },
      {
        title: "Angel Tax Exemption",
        detail: "Recognised startups are exempt from angel tax under Section 56(2)(viib).",
      },
      {
        title: "Fast-Track IP Applications",
        detail: "Reduced fees and expedited examination for patents, trademarks, and designs.",
      },
      {
        title: "Self-Certification for Labour Laws",
        detail: "Simplified compliance with 9 labour and 3 environment laws.",
      },
      {
        title: "Government Tenders",
        detail: "Relaxed prior experience and turnover criteria for government procurement.",
      },
      {
        title: "Access to Fund of Funds",
        detail: "Eligible for SIDBI Fund of Funds — a Rs.10,000 crore corpus for startup funding.",
      },
    ],
    processSteps: [
      {
        title: "Eligibility Assessment",
        detail: "Verify your company meets DPIIT eligibility criteria — age, turnover, incorporation type.",
      },
      {
        title: "Register on Startup India Portal",
        detail: "Create an account on startupindia.gov.in and begin the recognition application.",
      },
      {
        title: "Prepare Business Description",
        detail: "Draft a compelling description of your innovation, unique value proposition, and scalability.",
      },
      {
        title: "Upload Documents",
        detail: "Upload Certificate of Incorporation, PAN, and description of the innovative product or service.",
      },
      {
        title: "Submit & Track Application",
        detail: "Submit the application and track recognition status on the portal.",
      },
      {
        title: "Receive DPIIT Number",
        detail: "Upon approval, receive your DPIIT recognition number — the gateway to startup benefits.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Certificate of Incorporation",
          "PAN of the company",
          "Aadhaar and PAN of directors",
          "Description of the innovative product or service",
          "Website or pitch deck (if available)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Get DPIIT Recognised and Unlock Startup Benefits",
      subline: "P.A.J & Co. prepares your DPIIT recognition application — quickly and correctly.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 39_SHA
  {
    slug: "shareholders-agreement",
    category: "Startup & Funding Support",
    headline: "Shareholders' Agreement — Protect Your Equity from Day One",
    subheadline: "A legally binding agreement that governs the rights, obligations, and protections of every shareholder.",
    overview: {
      para1: "A Shareholders Agreement (SHA) is a private contract between the shareholders of a company that supplements the Articles of Association. It governs founder rights, investor protections, share transfer restrictions, anti-dilution provisions, drag-along and tag-along rights, and dispute resolution mechanisms.",
      para2: "Unlike the AOA (which is a public document), the SHA is a confidential agreement between the parties. For startups raising funding, the SHA is the most critical legal document — it determines the economics and control structure of the company.",
    },
    benefits: [
      {
        title: "Founder Protection",
        detail: "Define vesting schedules, non-compete clauses, and exit provisions to protect founders.",
      },
      {
        title: "Investor Protections",
        detail: "Anti-dilution rights, liquidation preference, board representation, and information rights.",
      },
      {
        title: "Conflict Prevention",
        detail: "Clear dispute resolution and decision-making provisions prevent costly shareholder disputes.",
      },
      {
        title: "Exit Clarity",
        detail: "Drag-along, tag-along, and ROFR clauses govern share sale and exit scenarios.",
      },
      {
        title: "Confidential",
        detail: "Unlike AOA, the SHA is a private document — keeping commercial terms confidential.",
      },
    ],
    processSteps: [
      {
        title: "Understand the Shareholding Structure",
        detail: "Map all existing and incoming shareholders, their stakes, and role in the company.",
      },
      {
        title: "Agree on Key Commercial Terms",
        detail: "Discuss and align on vesting schedules, voting rights, exit provisions, and investor protections.",
      },
      {
        title: "Draft SHA",
        detail: "Legal professionals draft the SHA covering all agreed terms in legally precise language.",
      },
      {
        title: "Negotiation Round",
        detail: "Facilitate negotiation between founders and investors to finalise the document.",
      },
      {
        title: "Legal Review & Sign-Off",
        detail: "Each party counsel reviews the final draft.",
      },
      {
        title: "Execution of SHA",
        detail: "Execute the SHA with proper stamp duty and witness signatures.",
      },
    ],
    documentsRequired: [
      {
        category: "Information Required",
        documents: [
          "List of all shareholders (existing and incoming) with stake percentages",
          "Founder vesting schedule (if applicable)",
          "Investor term sheet or proposed terms",
          "Existing AOA of the company",
          "Any existing agreements (prior SHA, CCPS terms)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Protect Your Startup's Equity and Future",
      subline: "P.A.J & Co. drafts and reviews Shareholders Agreements that protect every party's interests.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 40_StartupTax
  {
    slug: "startup-tax-exemption-80iac",
    category: "Startup & Funding Support",
    headline: "Startup Tax Exemption — Save Crores in Tax with Section 80-IAC",
    subheadline: "Apply for the Section 80-IAC income tax exemption and protect your startup's profits during the critical growth years.",
    overview: {
      para1: "Section 80-IAC of the Income Tax Act provides an income tax deduction of 100% of profits for DPIIT-recognised startups for any 3 consecutive years out of the first 10 years from incorporation. This is one of the most powerful tax benefits available to Indian startups.",
      para2: "To claim this exemption, the startup must be DPIIT-recognised, incorporated between April 2016 and the current date, and must obtain approval from the Inter-Ministerial Board (IMB) of the Government of India.",
    },
    benefits: [
      {
        title: "100% Profit Tax Exemption",
        detail: "Zero income tax on business profits for any 3 years out of the first 10 — a significant cash saving.",
      },
      {
        title: "Preserve Growth Capital",
        detail: "Tax savings directly increase the capital available for product development and growth.",
      },
      {
        title: "Angel Tax Benefit",
        detail: "DPIIT recognition (a prerequisite) also provides angel tax exemption.",
      },
      {
        title: "Compound Growth",
        detail: "Tax-free profits in early years dramatically accelerate the startup growth trajectory.",
      },
    ],
    processSteps: [
      {
        title: "DPIIT Recognition",
        detail: "Obtain DPIIT Startup Recognition (prerequisite for 80-IAC application).",
      },
      {
        title: "Eligibility Assessment",
        detail: "Verify that the startup meets 80-IAC criteria — incorporation date, entity type, nature of business.",
      },
      {
        title: "File Application with IMB",
        detail: "Submit the 80-IAC application to the Inter-Ministerial Board through the Startup India portal.",
      },
      {
        title: "Prepare Business Narrative",
        detail: "Draft a compelling business description highlighting innovation, scalability, and job creation.",
      },
      {
        title: "Attend IMB Interview (if called)",
        detail: "IMB may call the startup for a presentation — we prepare you for this.",
      },
      {
        title: "Claim in Tax Return",
        detail: "Once approved, claim the deduction in your company income tax return (ITR-6).",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "DPIIT recognition certificate",
          "Certificate of Incorporation",
          "PAN of company",
          "Audited financial statements",
          "Description of the innovative product or service",
          "Pitch deck (recommended)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Don't Pay Tax You're Eligible to Avoid",
      subline: "P.A.J & Co. helps your startup claim Section 80-IAC tax exemption — saving you crores in the critical early years.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 41_StrikeOff
  {
    slug: "company-strike-off",
    category: "Exit & Closure",
    headline: "Company Strike Off — Close Your Dormant Company the Right Way",
    subheadline: "Voluntarily dissolve a defunct company through the STK-2 process — clean, compliant, and permanent.",
    overview: {
      para1: "If your company is no longer operational and has no assets, liabilities, or pending compliances, you can apply for voluntary strike off under Section 248 of the Companies Act, 2013. The company must not have commenced business within 1 year of incorporation, or must have ceased business for 2 or more years.",
      para2: "The strike off process involves clearing all pending ROC filings, filing an STK-2 application with the ROC, and publishing a public notice. Upon approval, the company name is struck off the Register of Companies and it ceases to exist as a legal entity.",
    },
    benefits: [
      {
        title: "Eliminate Compliance Burden",
        detail: "A struck-off company has no more annual filing obligations, saving time and cost.",
      },
      {
        title: "Protect Directors",
        detail: "Prevents director disqualification arising from annual default of a dormant company.",
      },
      {
        title: "Clean MCA Record",
        detail: "Removes the inactive entity from your compliance portfolio.",
      },
      {
        title: "Cost-Effective Exit",
        detail: "Much cheaper and faster than voluntary winding up for simple cases.",
      },
    ],
    processSteps: [
      {
        title: "Eligibility Check",
        detail: "Confirm the company meets STK-2 eligibility — no active business, no pending litigation.",
      },
      {
        title: "Clear Pending MCA Filings",
        detail: "File all pending AOC-4 and MGT-7 returns to bring the company current.",
      },
      {
        title: "Settle All Liabilities",
        detail: "Ensure there are no outstanding loans, taxes, or vendor dues.",
      },
      {
        title: "Pass Board & Shareholder Resolutions",
        detail: "Pass resolutions authorising the strike off application.",
      },
      {
        title: "File STK-2 with ROC",
        detail: "Submit Form STK-2 with indemnity bonds, affidavits, and financial statements.",
      },
      {
        title: "ROC Notice & Final Order",
        detail: "ROC publishes a notice in the Official Gazette; upon no objection, issues the final strike off order.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Board and shareholder resolutions",
          "Indemnity bond (on stamp paper)",
          "Affidavit by all directors",
          "Statement of accounts (certified by CA)",
          "Consent of majority members",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Close Your Company Cleanly and Finally",
      subline: "P.A.J & Co. handles the entire company strike off process — from resolution to final ROC order.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 42_WindingUp
  {
    slug: "voluntary-winding-up",
    category: "Exit & Closure",
    headline: "Voluntary Winding Up — Dissolve Your Company Under NCLT",
    subheadline: "Liquidate company assets, settle liabilities, and dissolve your company through the proper legal process.",
    overview: {
      para1: "Voluntary winding up under the Insolvency and Bankruptcy Code (IBC), 2016 is a formal process for liquidating a solvent company with assets and liabilities. It is different from a simple strike off — it involves appointing a liquidator, distributing assets to creditors and shareholders, and obtaining an NCLT dissolution order.",
      para2: "The process is applicable when the company cannot be struck off due to existing assets or liabilities. It is initiated by a special resolution of shareholders and a declaration of solvency.",
    },
    benefits: [
      {
        title: "Proper Legal Closure",
        detail: "Ensures all debts are settled, assets distributed, and dissolution is legally final.",
      },
      {
        title: "Creditor Protection",
        detail: "Formal process ensures all creditors are properly notified and paid.",
      },
      {
        title: "Shareholder Returns",
        detail: "Assets remaining after settling liabilities are distributed to shareholders.",
      },
      {
        title: "NCLT Supervised",
        detail: "Independent oversight prevents disputes and challenges to the closure.",
      },
    ],
    processSteps: [
      {
        title: "Pass Special Resolution",
        detail: "Shareholders pass a special resolution to wind up the company voluntarily.",
      },
      {
        title: "Declaration of Solvency",
        detail: "Directors declare that the company is solvent and can pay all debts within 12 months.",
      },
      {
        title: "Appoint Liquidator",
        detail: "Appoint an insolvency professional (IP) as liquidator.",
      },
      {
        title: "Liquidator Takes Over",
        detail: "Liquidator takes control of assets, settles liabilities, and manages the liquidation estate.",
      },
      {
        title: "File with NCLT & IBBI",
        detail: "File the winding up commencement notice with NCLT and IBBI.",
      },
      {
        title: "Dissolution Order",
        detail: "After completing asset distribution, the liquidator applies to NCLT for a final dissolution order.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Special resolution of shareholders",
          "Declaration of solvency by directors",
          "Audited financial statements",
          "List of assets and liabilities",
          "Consent of proposed liquidator",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Dissolve Your Company with Legal Certainty",
      subline: "P.A.J & Co. manages the voluntary winding up process — ensuring a clean, dispute-free dissolution.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 43_LLPClose
  {
    slug: "llp-closure",
    category: "Exit & Closure",
    headline: "LLP Closure / Strike Off — Wind Down Your LLP Correctly",
    subheadline: "Close a defunct or non-operational LLP through the MCA LLP strike off process.",
    overview: {
      para1: "An LLP that has been inactive for at least 1 year or has never commenced business can apply for closure using Form 24 (LLP Strike Off) filed with the Registrar. All pending annual returns (Form 8 and Form 11) must be filed before the strike off application.",
      para2: "If the LLP has assets and liabilities, it must be wound up formally through NCLT under the LLP Act. P.A.J & Co. assists in both strike off and formal winding up of LLPs depending on your specific situation.",
    },
    benefits: [
      {
        title: "Eliminates Annual Filing Burden",
        detail: "A struck-off LLP has no Form 8 or Form 11 obligations going forward.",
      },
      {
        title: "Protects Partners",
        detail: "Prevents partner liability for default of a dormant LLP.",
      },
      {
        title: "Clean MCA Record",
        detail: "Removes the inactive LLP from your compliance obligations.",
      },
      {
        title: "Simple Process for Inactive LLPs",
        detail: "Strike off via Form 24 is faster and cheaper than formal winding up.",
      },
    ],
    processSteps: [
      {
        title: "Confirm LLP Eligibility",
        detail: "LLP must have been inactive for at least 1 year and have nil assets and liabilities.",
      },
      {
        title: "Clear Pending Filings",
        detail: "File all pending Form 8 (financial statements) and Form 11 (annual return) filings.",
      },
      {
        title: "Close Bank Accounts & Settle Liabilities",
        detail: "Close all LLP bank accounts and settle outstanding dues.",
      },
      {
        title: "Partner Resolution",
        detail: "All partners pass a resolution to close the LLP.",
      },
      {
        title: "File Form 24 with MCA",
        detail: "Submit the strike off application with indemnity bonds, affidavits, and nil financial statements.",
      },
      {
        title: "Receive Strike Off Order",
        detail: "MCA reviews and issues the final strike off order.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Partners consent and resolution",
          "Indemnity bond (on stamp paper)",
          "Affidavit by all partners",
          "Statement of accounts showing nil assets and liabilities",
          "Closed bank account confirmation",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Close Your LLP Without Ongoing Compliance Burden",
      subline: "P.A.J & Co. handles your LLP closure from resolution to MCA strike off order.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 44_GSTCancel
  {
    slug: "gst-cancellation",
    category: "Exit & Closure",
    headline: "GST Cancellation — Cancel Your GSTIN When You No Longer Need It",
    subheadline: "Voluntarily cancel your GST registration when your turnover falls below threshold or business ceases.",
    overview: {
      para1: "If your business has closed, been transferred, or turnover has fallen below the GST threshold, you must apply for voluntary cancellation of your GST registration in Form REG-16. Failure to cancel an unnecessary GST registration obligates you to continue filing returns — attracting penalties for non-compliance.",
      para2: "Before cancellation, you must reverse any Input Tax Credit remaining in your electronic credit ledger and file a final return in Form GSTR-10. P.A.J & Co. manages the entire GST cancellation and closure process.",
    },
    benefits: [
      {
        title: "Eliminate GST Filing Obligations",
        detail: "A cancelled GSTIN removes the mandatory monthly or quarterly return filing requirement.",
      },
      {
        title: "Avoid Non-Filing Penalties",
        detail: "Inactive GSTIN with unfiled returns attracts Rs.200/day late fee indefinitely.",
      },
      {
        title: "ITC Reversal Compliance",
        detail: "We calculate and file the required ITC reversal before cancellation.",
      },
      {
        title: "Clean Compliance Record",
        detail: "Proper cancellation with GSTR-10 filing ensures no lingering GST liability.",
      },
    ],
    processSteps: [
      {
        title: "Determine Eligibility for Cancellation",
        detail: "Confirm the reason for cancellation — business closure, below threshold, or structure change.",
      },
      {
        title: "File All Pending Returns",
        detail: "Ensure all GSTR-1 and GSTR-3B filings are up to date before applying.",
      },
      {
        title: "File REG-16 Application",
        detail: "Submit the cancellation application in Form REG-16 with reason and supporting documents.",
      },
      {
        title: "ITC Reversal Calculation",
        detail: "Calculate the ITC to be reversed on remaining stock and capital goods.",
      },
      {
        title: "File Final Return GSTR-10",
        detail: "File the Final Return (GSTR-10) within 3 months of cancellation order.",
      },
      {
        title: "Receive Cancellation Order",
        detail: "GST officer issues the cancellation order — registration is officially closed.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "GST registration certificate",
          "All filed GST returns",
          "ITC reversal workings",
          "Proof of business closure (if applicable)",
          "Stock statement at date of cancellation",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Cancel Your GST Registration the Right Way",
      subline: "P.A.J & Co. manages your GST cancellation and GSTR-10 filing — ensuring a clean exit from GST compliance.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 45_Convert
  {
    slug: "business-structure-conversion",
    category: "Restructuring",
    headline: "Business Conversion — Upgrade Your Structure for Growth",
    subheadline: "Convert from Partnership to LLP or Pvt Ltd — or from LLP to Pvt Ltd — with full legal continuity.",
    overview: {
      para1: "As businesses grow, the original structure often becomes inadequate. A partnership firm may need to convert to an LLP to gain limited liability, or to a Private Limited Company to attract equity investors. An LLP may need to convert to a Pvt Ltd for ESOP issuance or institutional fundraising.",
      para2: "The conversion process transfers all assets and liabilities of the original entity to the successor entity without breaking business continuity. P.A.J & Co. manages the legal, ROC, and tax aspects of the conversion to ensure a smooth transition.",
    },
    benefits: [
      {
        title: "Preserve Business Continuity",
        detail: "Conversion preserves existing contracts, bank accounts, and business relationships.",
      },
      {
        title: "Limited Liability",
        detail: "Partners gain personal liability protection through LLP or Pvt Ltd structure.",
      },
      {
        title: "Equity Fundraising",
        detail: "Pvt Ltd structure enables equity investment from VCs, angels, and institutional investors.",
      },
      {
        title: "Tax Continuity",
        detail: "Conversions are structured to preserve tax benefits and avoid capital gains triggers.",
      },
      {
        title: "ESOP Capability",
        detail: "Pvt Ltd structure enables employee equity participation — not possible in partnerships.",
      },
    ],
    processSteps: [
      {
        title: "Assess Current Structure & Objectives",
        detail: "Review current entity type and determine the optimal target structure.",
      },
      {
        title: "Obtain Partner / Member Consent",
        detail: "All partners or members must consent to the conversion.",
      },
      {
        title: "Apply for Name Reservation (if needed)",
        detail: "Reserve company name on MCA for conversion to Pvt Ltd.",
      },
      {
        title: "Obtain DSC & DIN for New Directors",
        detail: "If converting to Pvt Ltd, obtain DIN and DSC for all proposed directors.",
      },
      {
        title: "File Conversion Form with ROC",
        detail: "File Form LLP-10 or use SPICe+ for firm to company conversion.",
      },
      {
        title: "Receive New Certificate",
        detail: "Receive the new incorporation certificate — LLP Certificate or Certificate of Incorporation.",
      },
      {
        title: "Update Registrations",
        detail: "Update PAN, GST, bank accounts, and licences to reflect the new entity.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Partnership deed or LLP agreement",
          "Audited financial statements of current entity",
          "Consent of all partners or members",
          "PAN and Aadhaar of all partners and proposed directors",
          "Proof of registered office address",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Upgrade Your Business Structure for the Next Phase of Growth",
      subline: "P.A.J & Co. manages your business conversion — seamlessly and with full legal continuity.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 46_DD
  {
    slug: "due-diligence",
    category: "Core Advisory",
    headline: "Due Diligence — Comprehensive Corporate & Legal Review",
    subheadline: "Independent, thorough due diligence for M&A transactions, investments, and business partnerships.",
    overview: {
      para1: "Due diligence is a comprehensive investigation of a target company's legal, secretarial, financial, and regulatory status. It is conducted before mergers, acquisitions, investments, joint ventures, or significant business partnerships. The goal is to identify material risks, pending liabilities, and compliance gaps that could impact the transaction.",
      para2: "P.A.J & Co. conducts secretarial and legal due diligence — reviewing the company's incorporation documents, share structure, board minutes, statutory filings, litigation status, contractual obligations, and IP ownership to present a comprehensive due diligence report.",
    },
    benefits: [
      {
        title: "Risk Identification",
        detail: "Uncover hidden liabilities, pending litigation, and compliance failures before committing capital.",
      },
      {
        title: "Informed Transaction Pricing",
        detail: "Due diligence findings directly inform valuation and deal structuring.",
      },
      {
        title: "Negotiation Leverage",
        detail: "Material findings provide grounds for price adjustments or deal protection clauses.",
      },
      {
        title: "Post-Investment Protection",
        detail: "Representations and warranties in the investment agreement are anchored in due diligence findings.",
      },
      {
        title: "Independent Assurance",
        detail: "Objective third-party review gives investors and acquirers confidence.",
      },
    ],
    processSteps: [
      {
        title: "Scope & Information Request",
        detail: "Define the scope of due diligence and issue a detailed information request list to the target.",
      },
      {
        title: "Document Review",
        detail: "Review incorporation documents, statutory registers, MCA filings, contracts, licences, and litigation.",
      },
      {
        title: "Regulatory Compliance Check",
        detail: "Verify compliance with Companies Act, FEMA, tax laws, labour laws, and sector-specific regulations.",
      },
      {
        title: "Financial & Tax Review",
        detail: "Review audited financials, pending tax demands, and assessment orders.",
      },
      {
        title: "Draft Due Diligence Report",
        detail: "Prepare a structured report with findings, risk ratings, and recommendations.",
      },
      {
        title: "Management Discussion",
        detail: "Present findings to the acquiring party or investor and clarify material findings.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Reviewed",
        documents: [
          "Certificate of Incorporation and constitutional documents (MOA, AOA)",
          "All MCA filings (annual returns, event-based forms)",
          "Statutory registers",
          "Board and shareholder meeting minutes",
          "Key contracts (customers, vendors, leases)",
          "Tax returns and assessment orders",
          "Licences and regulatory approvals",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Invest and Acquire with Confidence",
      subline: "P.A.J & Co. delivers thorough due diligence reports that protect every transaction.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 47_Accounts
  {
    slug: "accounting-bookkeeping",
    category: "Core Advisory",
    headline: "Accounting & Bookkeeping — Accurate Books, Every Month",
    subheadline: "Professional bookkeeping and accounting services to keep your financials current, accurate, and audit-ready.",
    overview: {
      para1: "Accurate books of accounts are the foundation of every compliant business. Under the Companies Act, 2013 and Income Tax Act, every company, LLP, and firm is required to maintain proper books of account. Regular bookkeeping also enables timely GST filing, management reporting, and statutory audit.",
      para2: "P.A.J & Co. provides monthly bookkeeping and accounting services — recording transactions, reconciling bank statements, maintaining ledgers, and preparing monthly management accounts. We work with Tally, Zoho Books, and other popular accounting software.",
    },
    benefits: [
      {
        title: "Statutory Compliance",
        detail: "Properly maintained books are mandatory under the Companies Act and Income Tax Act.",
      },
      {
        title: "GST Reconciliation",
        detail: "Monthly reconciliation ensures your books align with GST returns — avoiding notices.",
      },
      {
        title: "Financial Visibility",
        detail: "Monthly P&L and balance sheet give management real-time financial visibility.",
      },
      {
        title: "Audit Readiness",
        detail: "Well-maintained books significantly reduce audit time and auditor queries.",
      },
      {
        title: "Tax Planning",
        detail: "Accurate financials enable proactive tax planning and ITC maximisation.",
      },
    ],
    processSteps: [
      {
        title: "Transaction Recording",
        detail: "Record all sales, purchases, receipts, payments, and journal entries on a daily or weekly basis.",
      },
      {
        title: "Bank Reconciliation",
        detail: "Reconcile bank statements with books every month to identify discrepancies.",
      },
      {
        title: "Accounts Payable & Receivable",
        detail: "Maintain AP/AR ledgers and ageing reports for cash flow management.",
      },
      {
        title: "Monthly Closing",
        detail: "Close the books at month end with all accruals, prepayments, and adjustments.",
      },
      {
        title: "Monthly MIS Reports",
        detail: "Provide P&L, Balance Sheet, and cash flow statement every month.",
      },
      {
        title: "Year-End Preparation",
        detail: "Prepare trial balance and support documents for statutory audit.",
      },
    ],
    documentsRequired: [
      {
        category: "What We Need",
        documents: [
          "Bank statements (all accounts)",
          "Sales invoices and receipts",
          "Purchase invoices and payment vouchers",
          "Expense bills and petty cash records",
          "Previous books or accounting software access (if any)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Keep Your Financials Clean and Current",
      subline: "P.A.J & Co. maintains your books every month — so you're always audit-ready and GST-compliant.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 48_Agreements
  {
    slug: "agreement-drafting-vetting",
    category: "Documentation & Legal Support",
    headline: "Agreement Drafting & Vetting — Protect Every Business Relationship",
    subheadline: "Professionally drafted commercial agreements that protect your interests and hold up under scrutiny.",
    overview: {
      para1: "Every business relationship — with customers, vendors, employees, investors, or partners — should be governed by a well-drafted agreement. Poorly worded contracts create ambiguity, litigation risk, and financial exposure. P.A.J & Co. drafts and vets a wide range of commercial agreements for businesses of all sizes.",
      para2: "We cover the full spectrum: Founder Agreements, Service Agreements, NDAs, Vendor Agreements, Employment Contracts, Leave and Licence Agreements, MoUs, Technology Licensing Agreements, and more. Every document is drafted with precision and practical business sense.",
    },
    benefits: [
      {
        title: "Legal Certainty",
        detail: "Clearly drafted agreements eliminate ambiguity and reduce the risk of disputes.",
      },
      {
        title: "Protection of Rights",
        detail: "Contractual protections for payment terms, IP ownership, confidentiality, and liability.",
      },
      {
        title: "Dispute Prevention",
        detail: "Clear dispute resolution clauses reduce costly litigation.",
      },
      {
        title: "Regulatory Compliance",
        detail: "Agreements structured to comply with relevant laws — IT Act, Contract Act, SEBI, FEMA.",
      },
      {
        title: "Stamp Duty Advisory",
        detail: "We advise on applicable stamp duty to ensure enforceability.",
      },
    ],
    processSteps: [
      {
        title: "Brief Collection",
        detail: "Understand the commercial intent, key terms, parties, and risk profile of the agreement.",
      },
      {
        title: "First Draft",
        detail: "Draft the agreement covering all key commercial, legal, and regulatory provisions.",
      },
      {
        title: "Client Review",
        detail: "Share draft with the client for review of commercial terms and business requirements.",
      },
      {
        title: "Counterparty Negotiation",
        detail: "Assist in reviewing counterparty redlines and negotiating final terms.",
      },
      {
        title: "Finalisation & Execution",
        detail: "Prepare the final execution version with proper execution blocks, stamp duty, and witness requirements.",
      },
    ],
    documentsRequired: [
      {
        category: "Types of Agreements We Draft",
        documents: [
          "Non-Disclosure Agreement (NDA)",
          "Founder Agreement",
          "Service Agreement / Master Service Agreement",
          "Employee Offer Letter & ESOP Agreement",
          "Vendor / Supplier Agreement",
          "Shareholders Agreement (SHA)",
          "Share Subscription Agreement (SSA)",
          "Joint Venture Agreement",
          "Technology Licensing Agreement",
          "Leave and Licence Agreement",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Every Business Deal Deserves a Solid Agreement",
      subline: "P.A.J & Co. drafts and vets commercial agreements that protect your business — clearly and completely.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 49_SSA
  {
    slug: "share-subscription-agreement",
    category: "Documentation & Legal Support",
    headline: "Share Subscription Agreement — Formalise Every Investment Round",
    subheadline: "A legally binding agreement governing the terms of investment and share issuance in your company.",
    overview: {
      para1: "A Share Subscription Agreement (SSA) is the primary transaction document used when an investor subscribes to newly issued shares of a company. It governs the investment amount, price per share, closing conditions, representations and warranties, and covenants. For most startup funding rounds, the SSA is executed together with a Shareholders Agreement (SHA).",
      para2: "P.A.J & Co. drafts, reviews, and negotiates SSAs for both founders and investors — ensuring the document is balanced, legally precise, and structured to enable smooth closing of the transaction.",
    },
    benefits: [
      {
        title: "Investment Certainty",
        detail: "SSA provides legal certainty on the investment amount, valuation, and share terms.",
      },
      {
        title: "Representations & Warranties",
        detail: "Protects the investor with factual representations from the company and founders.",
      },
      {
        title: "Closing Conditions",
        detail: "Clearly defines what must happen before the investment closes.",
      },
      {
        title: "FEMA Compliance",
        detail: "Foreign investments require FEMA-compliant SSAs for RBI reporting.",
      },
      {
        title: "Investor & Founder Balance",
        detail: "Well-drafted SSA protects both the investor capital and the founder operational control.",
      },
    ],
    processSteps: [
      {
        title: "Term Sheet Review",
        detail: "Review and align on the term sheet before commencing the SSA draft.",
      },
      {
        title: "Draft SSA",
        detail: "Draft the SSA covering investment amount, share class, price, conditions precedent, representations, and covenants.",
      },
      {
        title: "Due Diligence Support",
        detail: "Compile disclosure schedules based on the due diligence process.",
      },
      {
        title: "Negotiation of Redlines",
        detail: "Manage the negotiation process between investor counsel and founder counsel.",
      },
      {
        title: "Regulatory Compliance Check",
        detail: "Ensure FEMA compliance for foreign investments; check FDI policy adherence.",
      },
      {
        title: "Execution & FIRC / FC-GPR (if FDI)",
        detail: "Manage execution, stamping, and FEMA reporting filings for foreign investors.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Signed term sheet or investment proposal",
          "Existing SHA (if any)",
          "Certificate of Incorporation and current cap table",
          "Audited financial statements",
          "FEMA or FIPB approvals (for foreign investors)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Structure Your Investment Round on Solid Legal Ground",
      subline: "P.A.J & Co. drafts and negotiates Share Subscription Agreements that protect investors and founders alike.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 50_TM
  {
    slug: "trademark-registration",
    category: "Intellectual Property (IPR)",
    headline: "Trademark Registration — Protect Your Brand Identity",
    subheadline: "Register your brand name, logo, or tagline as a trademark and gain exclusive ownership across India.",
    overview: {
      para1: "A trademark is any distinctive mark — word, logo, symbol, colour, or combination — that identifies the source of goods or services. A registered trademark gives the owner the exclusive right to use the mark for the registered goods and services, and the legal right to prevent others from using identical or deceptively similar marks.",
      para2: "Trademark registration in India is governed by the Trade Marks Act, 1999. The process typically takes 18–24 months but the TM symbol can be used from the date of application. P.A.J & Co. handles the entire trademark filing and prosecution process.",
    },
    benefits: [
      {
        title: "Exclusive Brand Rights",
        detail: "Registered trademark gives nationwide exclusive rights to your brand mark.",
      },
      {
        title: "Legal Protection",
        detail: "Right to sue infringers and claim damages for trademark violations.",
      },
      {
        title: "TM to R Symbol",
        detail: "Use TM immediately on filing and R (in circle) once registration is granted.",
      },
      {
        title: "Brand Asset Valuation",
        detail: "Registered trademarks are valuable IP assets that can be licensed or sold.",
      },
      {
        title: "10-Year Renewable",
        detail: "Trademark registration is valid for 10 years and infinitely renewable.",
      },
      {
        title: "Global Filing Basis",
        detail: "Indian registration forms the basis for Madrid Protocol international trademark filings.",
      },
    ],
    processSteps: [
      {
        title: "Trademark Search",
        detail: "Conduct a comprehensive search on the IP India database and phonetically similar marks.",
      },
      {
        title: "Class Identification",
        detail: "Identify the appropriate Nice Classification class(es) for your goods or services.",
      },
      {
        title: "File TM Application",
        detail: "File the trademark application in Form TM-A on the IP India portal.",
      },
      {
        title: "Examination by Registry",
        detail: "The Trade Marks Registry examines the application and issues an Examination Report if there are objections.",
      },
      {
        title: "Respond to Examination Report",
        detail: "Reply to any objections or conditions raised in the examination report.",
      },
      {
        title: "Publication in Trade Marks Journal",
        detail: "Accepted marks are published for public opposition (4-month opposition window).",
      },
      {
        title: "Registration Certificate",
        detail: "If unopposed, the mark is registered and a certificate issued.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Brand name, logo, or mark (high-resolution if logo)",
          "Description of goods or services to be covered",
          "Date of first use (if claiming prior use)",
          "PAN of applicant",
          "Power of attorney (signed by applicant)",
          "GST certificate (if available)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Protect Your Brand Before Someone Else Does",
      subline: "P.A.J & Co. files and prosecutes your trademark application — giving your brand the legal protection it deserves.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 51_TMObj
  {
    slug: "trademark-objection-reply",
    category: "Intellectual Property (IPR)",
    headline: "Trademark Objection Reply — Overcome the Registry Objections",
    subheadline: "A strong, well-reasoned reply to the Trade Marks Registry's Examination Report — to get your mark to registration.",
    overview: {
      para1: "When the Trade Marks Registry examines your application, it may issue an Examination Report citing grounds for refusing the mark — such as similarity to an existing mark, descriptiveness, or lack of distinctiveness. A reply must be filed within 30 days; failure results in abandonment of the application.",
      para2: "P.A.J & Co. prepares comprehensive Examination Report replies with supporting legal arguments, case law, affidavits of prior use, and comparative analyses — significantly improving the probability of the mark proceeding to acceptance and registration.",
    },
    benefits: [
      {
        title: "Avoid Application Abandonment",
        detail: "Timely, substantive reply is mandatory to prevent abandonment.",
      },
      {
        title: "Expert Legal Arguments",
        detail: "We cite relevant case law, Registrar decisions, and legal principles in support.",
      },
      {
        title: "Affidavit of Use",
        detail: "For prior use marks, we prepare a proper affidavit and evidence of use.",
      },
      {
        title: "Hearing Representation",
        detail: "If the Registry schedules a hearing, we represent you before the Registrar.",
      },
    ],
    processSteps: [
      {
        title: "Review the Examination Report",
        detail: "Analyse the specific objections raised — citation, relative grounds, absolute grounds, or conditions.",
      },
      {
        title: "Search Prior Art",
        detail: "Search the cited marks and assess the strength of the citation.",
      },
      {
        title: "Prepare Reply",
        detail: "Draft a comprehensive reply addressing each objection with legal arguments and case law.",
      },
      {
        title: "Prepare Evidence of Use (if applicable)",
        detail: "Compile invoices, advertisements, and affidavit evidence of prior use.",
      },
      {
        title: "File Reply on IP India Portal",
        detail: "File the reply within 30 days of the Examination Report date.",
      },
      {
        title: "Attend Hearing (if called)",
        detail: "Represent before the Hearing Officer if a personal hearing is called.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Copy of the Examination Report (objection letter)",
          "Original TM application details",
          "Evidence of prior use (invoices, brochures, advertisements) if claiming use",
          "Previous marketing materials showing the mark",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Fight for Your Trademark Registration",
      subline: "P.A.J & Co. prepares compelling objection replies that give your trademark the best chance of registration.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 52_TMCancel
  {
    slug: "trademark-cancellation",
    category: "Intellectual Property (IPR)",
    headline: "Trademark Cancellation & Counter Statement — Defend Your Mark",
    subheadline: "File a cancellation petition against conflicting marks, or defend your registration against cancellation proceedings.",
    overview: {
      para1: "Trademark cancellation proceedings before the Intellectual Property Appellate Board (IPAB) or High Court can be initiated to cancel a registered trademark that is conflicting with yours, has been obtained fraudulently, or is not in use (non-use cancellation under Section 47). Conversely, if your trademark faces a cancellation petition, a counter statement must be filed within 2 months.",
      para2: "P.A.J & Co. handles both offensive cancellation petitions against conflicting marks and defensive counter statements to resist cancellation of your registrations — with strong legal strategy and representation.",
    },
    benefits: [
      {
        title: "Remove Conflicting Marks",
        detail: "Cancellation of a conflicting registered mark clears the path for your own registration or use.",
      },
      {
        title: "Defend Existing Registration",
        detail: "A strong counter statement protects your hard-earned trademark registration.",
      },
      {
        title: "Non-Use Cancellation",
        detail: "Remove deadwood marks that have not been used for 5 years, which are blocking your registration.",
      },
      {
        title: "Expert Representation",
        detail: "P.A.J & Co. represents clients in cancellation proceedings before IPAB and High Courts.",
      },
    ],
    processSteps: [
      {
        title: "Case Assessment",
        detail: "Analyse the strength of the cancellation case — prior use, non-use, fraud, or conflict.",
      },
      {
        title: "File Cancellation Petition (TM-O)",
        detail: "File the rectification or cancellation petition before the IPAB or Registrar.",
      },
      {
        title: "Serve Notice on Proprietor",
        detail: "Serve the cancellation petition on the registered proprietor.",
      },
      {
        title: "Receive & Respond to Counter Statement",
        detail: "Respond to the counter statement filed by the opposite party.",
      },
      {
        title: "Evidence Stage",
        detail: "File evidence in support of cancellation or defence.",
      },
      {
        title: "Oral Hearing & Decision",
        detail: "Appear before the Tribunal for oral hearing and await the final order.",
      },
    ],
    documentsRequired: [
      {
        category: "Documents Required",
        documents: [
          "Conflicting trademark registration details",
          "Evidence of prior use (for cancellation on use grounds)",
          "Evidence of non-use of the mark (for non-use cancellation)",
          "All previous TM applications and registrations in your name",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Protect or Clear the Path for Your Trademark",
      subline: "P.A.J & Co. handles trademark cancellation and counter statement proceedings with expertise.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 53_TMWatch
  {
    slug: "trademark-watch-search",
    category: "Intellectual Property (IPR)",
    headline: "Trademark Search & Watch — Know Before You File, Monitor After",
    subheadline: "Comprehensive trademark availability search before filing, and ongoing watch services to protect your registered mark.",
    overview: {
      para1: "A trademark search is the essential first step before adopting or filing a brand name or logo. It identifies existing identical or deceptively similar marks in the same class, reducing the risk of objection and opposition. A trademark watch service monitors new applications filed after your registration — alerting you to potential conflicts.",
      para2: "P.A.J & Co. conducts thorough clearance searches covering phonetically similar marks, transliterations, and visual similarities — providing a clear picture of the risk before you invest in your brand.",
    },
    benefits: [
      {
        title: "Avoid Wasted Investment",
        detail: "Know your brand is available before spending on marketing and brand building.",
      },
      {
        title: "Objection Risk Assessment",
        detail: "Pre-filing search reduces the risk of Registry objection and opposition by third parties.",
      },
      {
        title: "Infringement Prevention",
        detail: "Watch services alert you when similar marks are filed — enabling early opposition.",
      },
      {
        title: "Portfolio Monitoring",
        detail: "Keep track of your entire trademark portfolio renewal dates and watch status.",
      },
      {
        title: "Comprehensive Search",
        detail: "We search word marks, device marks, phonetically similar marks, and multilingual variations.",
      },
    ],
    processSteps: [
      {
        title: "Public Search on IP India Portal",
        detail: "Search the IP India database for identical and similar marks in relevant classes.",
      },
      {
        title: "Phonetic Similarity Analysis",
        detail: "Check for phonetically similar marks — a common ground for Registry objection.",
      },
      {
        title: "Common Law Search",
        detail: "Search for unregistered marks in use through internet and trade directory searches.",
      },
      {
        title: "Search Report",
        detail: "Deliver a structured clearance report with risk assessment and recommendations.",
      },
      {
        title: "Watch Service Setup",
        detail: "Set up ongoing monitoring of the Trade Marks Journal for conflicting applications.",
      },
      {
        title: "Opposition Advisory",
        detail: "Alert and advise on filing an opposition if a conflicting mark is published.",
      },
    ],
    documentsRequired: [
      {
        category: "Information Required for Search",
        documents: [
          "Proposed brand name (word mark)",
          "Proposed logo (if device mark search required)",
          "Goods or services to be covered",
          "List of classes (if known)",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Search First, File with Confidence",
      subline: "P.A.J & Co. provides comprehensive trademark search and ongoing watch services to protect your brand.",
      buttonText: "Book Your Free Consultation",
    },
  },

  // 54_Hearing
  {
    slug: "trademark-hearing-representation",
    category: "Intellectual Property (IPR)",
    headline: "Trademark Hearing Representation — Expert Advocacy Before the Registrar",
    subheadline: "Professional representation at trademark hearings before the Trade Marks Registry, IPAB, and High Courts.",
    overview: {
      para1: "Trademark proceedings at various stages — examination hearings, opposition hearings, and cancellation proceedings — require personal appearance and legal argument before the Hearing Officer or the Tribunal. These hearings are critical junctures where well-prepared professional representation can make the difference between registration and refusal.",
      para2: "P.A.J & Co. provides trademark hearing representation for examination report hearings, opposition hearings, and cancellation or rectification proceedings before the IPAB and High Courts.",
    },
    benefits: [
      {
        title: "Expert Advocacy",
        detail: "Professionally trained representatives with experience in trademark law and Registry proceedings.",
      },
      {
        title: "Structured Legal Arguments",
        detail: "Hearings supported by comprehensive written submissions, case law, and evidence.",
      },
      {
        title: "High Probability of Success",
        detail: "Expert preparation and representation significantly increases the chances of a favourable outcome.",
      },
      {
        title: "Pan-India Coverage",
        detail: "Representation at Trade Marks Registry offices across Mumbai, Delhi, Chennai, Kolkata, and Ahmedabad.",
      },
    ],
    processSteps: [
      {
        title: "Case Review & Strategy",
        detail: "Thoroughly review the case file, examination report, or notice of opposition to develop a hearing strategy.",
      },
      {
        title: "Prepare Written Submissions",
        detail: "Draft comprehensive written arguments with case law, Registry precedents, and factual support.",
      },
      {
        title: "Evidence Compilation",
        detail: "Compile all use evidence, survey data, and supporting exhibits for the hearing.",
      },
      {
        title: "Attend Hearing",
        detail: "Appear before the Hearing Officer or Tribunal and present oral arguments.",
      },
      {
        title: "Post-Hearing Follow-Up",
        detail: "Track the outcome, respond to any post-hearing observations, and advise on further action.",
      },
    ],
    documentsRequired: [
      {
        category: "Information Required",
        documents: [
          "All existing case correspondence (Examination Report, Notice of Opposition, etc.)",
          "Full prosecution history of the trademark application",
          "Evidence of use (if applicable)",
          "Previous replies or counter statements filed",
          "Date and details of the scheduled hearing",
        ],
      },
    ],
    whyChoosePAJ: {
      intro: "P.A.J & Co. is a firm of experienced Company Secretaries dedicated to making your compliance smooth, fast, and fully compliant.",
      points: [
        {
          title: "Expert Team",
          detail: "CAs, CSs, and legal advisors with deep MCA, SEBI, and RBI knowledge.",
        },
        {
          title: "End-to-End Support",
          detail: "From document collection to final filing, we handle everything.",
        },
        {
          title: "Transparent Pricing",
          detail: "No hidden charges. Clear, upfront pricing with milestone updates.",
        },
        {
          title: "Fast Turnaround",
          detail: "Digital processes ensure fastest timelines without compromising compliance.",
        },
        {
          title: "Post-Service Guidance",
          detail: "GST, payroll, ROC filings, annual compliances — we stay with you.",
        },
      ],
    },
    cta: {
      headline: "Never Face a Trademark Hearing Alone",
      subline: "P.A.J & Co. represents your trademark at every hearing — with preparation, precision, and persistence.",
      buttonText: "Book Your Free Consultation",
    },
  },
];