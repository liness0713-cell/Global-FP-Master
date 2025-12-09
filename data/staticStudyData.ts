
import { FPLevel, StudyNote } from '../types';

// Helper to construct the key
const getKey = (level: FPLevel, chapter: string) => `${level}:${chapter}`;

export const STATIC_STUDY_NOTES: Record<string, StudyNote> = {
  // ==================================================================================
  // FP Level 3 - Life Planning (Part 1)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_3, "FPと関連法規・職業倫理")]: {
    id: "fp3_lp_01",
    chapter: "FPと関連法規・職業倫理",
    title: {
      ja: "FPと<ruby>関連法規<rt>かんれんほうき</rt></ruby>・<ruby>職業倫理<rt>しょくぎょうりんり</rt></ruby>",
      ja_kana: "FPとかんれんほうき・しょくぎょうりんり",
      en: "FP Related Laws and Professional Ethics",
      cn: "FP相关法规与职业道德"
    },
    sections: [
      {
        title: {
          ja: "FPの<ruby>職業倫理<rt>しょくぎょうりんり</rt></ruby>",
          ja_kana: "FPのしょくぎょうりんり",
          en: "Professional Ethics of FP",
          cn: "FP的职业道德"
        },
        content: {
          ja: "ファイナンシャル・プランナー（FP）には、<ruby>顧客<rt>こきゃく</rt></ruby>の<ruby>利益<rt>りえき</rt></ruby>を<ruby>第一<rt>だいいち</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>える「<ruby>顧客利益<rt>こきゃくりえき</rt></ruby>の<ruby>優先<rt>ゆうせん</rt></ruby>」や、<ruby>業務上<rt>ぎょうむじょう</rt></ruby><ruby>知<rt>し</rt></ruby>り<ruby>得<rt>え</rt></ruby>た<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>第三者<rt>だいさんしゃ</rt></ruby>に<ruby>漏<rt>も</rt></ruby>らさない「<ruby>守秘義務<rt>しゅひぎむ</rt></ruby>」が<ruby>求<rt>もと</rt></ruby>められます。",
          ja_kana: "",
          en: "FPs are required to prioritize 'Customer Interests' and adhere to 'Confidentiality', ensuring information learned during business is not leaked.",
          cn: "理财规划师（FP）必须坚持“客户利益优先”，并遵守“保密义务”，不得泄露业务中获知的信息。"
        }
      },
      {
        title: {
          ja: "FPと<ruby>関連法規<rt>かんれんほうき</rt></ruby>",
          ja_kana: "FPとかんれんほうき",
          en: "FP and Related Laws",
          cn: "FP与相关法规"
        },
        content: {
          ja: "FPが<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>税務相談<rt>ぜいむそうだん</rt></ruby>や<ruby>税務書類<rt>ぜいむしょるい</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことは、<ruby>税理士法<rt>ぜいりしほう</rt></ruby>に<ruby>抵触<rt>ていしょく</rt></ruby>するためできません。<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>解説<rt>かいせつ</rt></ruby>は<ruby>可能<rt>かのう</rt></ruby>です。",
          ja_kana: "",
          en: "FPs cannot provide specific tax consultation or create tax documents as it violates the Certified Public Tax Accountant Act. General explanations are allowed.",
          cn: "FP不能进行具体的税务咨询或制作税务文件，因为这违反了《税理士法》。可以进行一般的解释。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "ライフプランニングの手法・3つの資金")]: {
    id: "fp3_lp_02",
    chapter: "ライフプランニングの手法・3つの資金",
    title: {
      ja: "ライフプランニングの<ruby>手法<rt>しゅほう</rt></ruby>・3つの<ruby>資金<rt>しきん</rt></ruby>",
      ja_kana: "ライフプランニングのしゅほう・3つのしきん",
      en: "Life Planning Methods & The 3 Major Funds",
      cn: "人生规划方法与三大资金"
    },
    sections: [
      {
        title: { ja: "3つの<ruby>資金<rt>しきん</rt></ruby>", ja_kana: "", en: "The 3 Major Funds", cn: "三大资金" },
        content: {
          ja: "人生の<ruby>三大資金<rt>さんだいしきん</rt></ruby>は、1. <ruby>教育資金<rt>きょういくしきん</rt></ruby>、2. <ruby>住宅資金<rt>じゅうたくしきん</rt></ruby>、3. <ruby>老後資金<rt>ろうごしきん</rt></ruby>です。",
          ja_kana: "",
          en: "The Three Major Funds of Life are: 1. Education Funds, 2. Housing Funds, and 3. Retirement Funds.",
          cn: "人生三大资金是：1. 教育资金，2. 住房资金，3. 养老资金。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "社会保険の概要 (医療・介護)")]: {
    id: "fp3_lp_03",
    chapter: "社会保険の概要 (医療・介護)",
    title: { ja: "<ruby>社会保険<rt>しゃかいほけん</rt></ruby>の<ruby>概要<rt>がいよう</rt></ruby>", ja_kana: "", en: "Overview of Social Insurance", cn: "社会保险概要" },
    sections: [
      {
        title: { ja: "<ruby>自己負担割合<rt>じこふたんわりあい</rt></ruby>", ja_kana: "", en: "Copayment Rate", cn: "自付比例" },
        content: {
          ja: "<ruby>医療費<rt>いりょうひ</rt></ruby>の自己負担は、小学校入学前2割、小学生〜69歳3割、70歳〜74歳2割、75歳以上1割が原則です。",
          ja_kana: "",
          en: "Medical expense copayment is 20% for preschoolers, 30% for age 6-69, 20% for 70-74, and 10% for 75+.",
          cn: "医疗费自付比例原则上为：学龄前20%，6-69岁30%，70-74岁20%，75岁以上10%。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "公的年金制度の基本 (国民年金・厚生年金)")]: {
    id: "fp3_lp_04",
    chapter: "公的年金制度の基本 (国民年金・厚生年金)",
    title: { ja: "<ruby>公的年金制度<rt>こうてきねんきんせいど</rt></ruby>", ja_kana: "", en: "Public Pension System", cn: "公共养老金制度" },
    sections: [
      {
        title: { ja: "<ruby>国民年金<rt>こくみんねんきん</rt></ruby>", ja_kana: "", en: "National Pension", cn: "国民年金" },
        content: {
          ja: "日本国内に住所のある20歳以上60歳未満のすべての人が加入します。<ruby>第1号<rt>だいいちごう</rt></ruby>（自営業・学生）、<ruby>第2号<rt>だいにごう</rt></ruby>（会社員）、<ruby>第3号<rt>だいさんごう</rt></ruby>（第2号の被扶養配偶者）に分かれます。",
          ja_kana: "",
          en: "All residents aged 20-59 join. Divided into Category 1 (Self-employed/Students), Category 2 (Employees), and Category 3 (Dependent spouses of Cat 2).",
          cn: "所有居住在日本的20-59岁人员必须加入。分为第1号（个体户/学生）、第2号（公司职员）、第3号（第2号的被抚养配偶）。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "年金給付 (老齢・障害・遺族)")]: {
    id: "fp3_lp_05",
    chapter: "年金給付 (老齢・障害・遺族)",
    title: { ja: "<ruby>年金給付<rt>ねんきんきゅうふ</rt></ruby>", ja_kana: "", en: "Pension Benefits", cn: "养老金给付" },
    sections: [
      {
        title: { ja: "<ruby>受給開始年齢<rt>じゅきゅうかいしねんれい</rt></ruby>", ja_kana: "", en: "Pension Start Age", cn: "领取开始年龄" },
        content: {
          ja: "原則65歳からです。希望すれば60歳から<ruby>繰り上げ<rt>くりあげ</rt></ruby>受給（減額）、75歳まで<ruby>繰り下げ<rt>くりさげ</rt></ruby>受給（増額）が可能です。",
          ja_kana: "",
          en: "Principally starts at 65. Can be advanced to 60 (reduced amount) or deferred up to 75 (increased amount).",
          cn: "原则上从65岁开始。可选择从60岁提前领取（减额），或推迟至75岁领取（增额）。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "企業年金と個人年金")]: {
    id: "fp3_lp_06",
    chapter: "企業年金と個人年金",
    title: { ja: "iDeCoと<ruby>企業年金<rt>きぎょうねんきん</rt></ruby>", ja_kana: "", en: "iDeCo & Corporate Pension", cn: "iDeCo与企业年金" },
    sections: [
      {
        title: { ja: "iDeCoのメリット", ja_kana: "", en: "Merits of iDeCo", cn: "iDeCo的优点" },
        content: {
          ja: "掛金が全額<ruby>所得控除<rt>しょとくこうじょ</rt></ruby>になる、運用益が<ruby>非課税<rt>ひかぜい</rt></ruby>になる、受け取り時も控除が使える、の3つの税制メリットがあります。",
          ja_kana: "",
          en: "Three tax benefits: Contributions are tax-deductible, investment gains are tax-free, and deductions apply upon receipt.",
          cn: "三大税收优惠：挂金全额所得扣除，投资收益免税，领取时也可享受扣除。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "住宅ローンの仕組みと金利")]: {
    id: "fp3_lp_07",
    chapter: "住宅ローンの仕組みと金利",
    title: { ja: "<ruby>住宅<rt>じゅうたく</rt></ruby>ローン", ja_kana: "", en: "Mortgages", cn: "住房贷款" },
    sections: [
      {
        title: { ja: "<ruby>フラット35<rt>ふらっとさんじゅうご</rt></ruby>", ja_kana: "", en: "Flat 35", cn: "Flat 35" },
        content: {
          ja: "<ruby>住宅金融支援機構<rt>じゅうたくきんゆうしえんきこう</rt></ruby>と民間金融機関が提携して提供する、全期間<ruby>固定金利<rt>こていきんり</rt></ruby>の住宅ローンです。",
          ja_kana: "",
          en: "A long-term fixed-rate mortgage provided by JHF in partnership with private financial institutions.",
          cn: "由住宅金融支援机构与民间金融机构合作提供的全期固定利率住房贷款。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "教育資金と奨学金")]: {
    id: "fp3_lp_08",
    chapter: "教育資金と奨学金",
    title: { ja: "<ruby>教育資金<rt>きょういくしきん</rt></ruby>と<ruby>奨学金<rt>しょうがくきん</rt></ruby>", ja_kana: "", en: "Education Funds & Scholarships", cn: "教育资金与奖学金" },
    sections: [
      {
        title: { ja: "<ruby>国の教育ローン<rt>くにのきょういくろーん</rt></ruby>", ja_kana: "", en: "Government Education Loan", cn: "国家教育贷款" },
        content: {
          ja: "<ruby>日本政策金融公庫<rt>にっぽんせいさくきんゆうこうこ</rt></ruby>が取り扱う公的な融資制度です。学生1人につき350万円まで借入可能で、固定金利です。",
          ja_kana: "",
          en: "A public loan system handled by the JFC. Up to 3.5 million yen per student, fixed interest rate.",
          cn: "由日本政策金融公库办理的公共贷款制度。每名学生最多可借350万日元，固定利率。"
        }
      },
      {
        title: { ja: "<ruby>日本学生支援機構<rt>にほんがくせいしえんきこう</rt></ruby> (JASSO)", ja_kana: "", en: "JASSO Scholarships", cn: "JASSO奖学金" },
        content: {
          ja: "返済不要の「<ruby>給付型<rt>きゅうふがた</rt></ruby>」と、返済が必要な「<ruby>貸与型<rt>たいよがた</rt></ruby>」があります。貸与型には無利息の第一種と、利息付きの第二種があります。",
          ja_kana: "",
          en: "There are 'Benefit type' (no repayment) and 'Loan type' (repayment required). Loan type includes Type 1 (interest-free) and Type 2 (with interest).",
          cn: "有无需偿还的“给付型”和需要偿还的“贷与型”。贷与型分为无利息的第一种和有利息的第二种。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "カードと消費者信用")]: {
    id: "fp3_lp_09",
    chapter: "カードと消費者信用",
    title: { ja: "カードと<ruby>消費者信用<rt>しょうひしゃしんよう</rt></ruby>", ja_kana: "", en: "Cards & Consumer Credit", cn: "信用卡与消费者信用" },
    sections: [
      {
        title: { ja: "<ruby>信用情報機関<rt>しんようじょうほうきかん</rt></ruby>", ja_kana: "", en: "Credit Information Agencies", cn: "信用信息机构" },
        content: {
          ja: "個人のクレジットやローンの利用履歴を管理する機関です。延滞情報などは「事故情報」として登録され、一定期間ローンが組めなくなります。",
          ja_kana: "",
          en: "Agencies that manage personal credit/loan history. Delinquency info is registered as 'accident info', preventing loans for a certain period.",
          cn: "管理个人信用卡及贷款使用记录的机构。逾期信息等会被登记为“事故信息”，一定期间内无法贷款。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 3 - Risk Management (Part 2)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_3, "保険の基本用語と仕組み")]: {
    id: "fp3_risk_01",
    chapter: "保険の基本用語と仕組み",
    title: { ja: "<ruby>保険<rt>ほけん</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>", ja_kana: "", en: "Insurance Basics", cn: "保险基础" },
    sections: [
      {
        title: { ja: "<ruby>大数の法則<rt>たいすうのほうそく</rt></ruby>", ja_kana: "", en: "Law of Large Numbers", cn: "大数法则" },
        content: {
          ja: "少数の事例では不確定なことも、数多く集めると一定の法則が見出せるという原理です。保険料計算の基礎となります。",
          ja_kana: "",
          en: "The principle that regular patterns emerge from a large number of trials, forming the basis of insurance premium calculations.",
          cn: "即使少数案例不确定，只要收集足够多，就能发现一定规律的原理。这是保险费计算的基础。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "保険業法とクーリング・オフ")]: {
    id: "fp3_risk_02",
    chapter: "保険業法とクーリング・オフ",
    title: { ja: "クーリング・オフ", ja_kana: "", en: "Cooling-off", cn: "冷静期" },
    sections: [
      {
        title: { ja: "<ruby>適用除外<rt>てきようじょがい</rt></ruby>", ja_kana: "", en: "Exclusions", cn: "适用除外" },
        content: {
          ja: "医師の診査を受けた場合、営業所等で申し込みをした場合、保険期間が1年以下の場合はクーリング・オフできません。",
          ja_kana: "",
          en: "Cooling-off does not apply if a medical exam was taken, application was at a business office, or term is 1 year or less.",
          cn: "接受了医生检查、在营业所等地申请、保险期间为1年以下的情况，不能行使冷静期权。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "生命保険の基本商品 (定期・終身・養老)")]: {
    id: "fp3_risk_03",
    chapter: "生命保険の基本商品 (定期・終身・養老)",
    title: { ja: "<ruby>生命保険<rt>せいめいほけん</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>", ja_kana: "", en: "Types of Life Insurance", cn: "人寿保险种类" },
    sections: [
      {
        title: { ja: "<ruby>定期保険<rt>ていきほけん</rt></ruby>", ja_kana: "", en: "Term Insurance", cn: "定期保险" },
        content: {
          ja: "「掛け捨て」とも呼ばれ、満期保険金がない代わりに、割安な保険料で大きな保障を得られます。",
          ja_kana: "",
          en: "Also called 'kakesute' (paying for coverage only), offers large coverage for cheap premiums with no maturity benefit.",
          cn: "也被称为“消费型”，虽然没有满期保险金，但可以用较低的保费获得较大的保障。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "生命保険の特約と見直し")]: {
    id: "fp3_risk_04",
    chapter: "生命保険の特約と見直し",
    title: { ja: "<ruby>特約<rt>とくやく</rt></ruby>と<ruby>見直<rt>みなお</rt></ruby>し", ja_kana: "", en: "Riders and Review", cn: "特约与检视" },
    sections: [
      {
        title: { ja: "<ruby>リビング・ニーズ特約<rt>りびんぐにーずとくやく</rt></ruby>", ja_kana: "", en: "Living Needs Rider", cn: "生前给付特约" },
        content: {
          ja: "余命6ヶ月以内と診断されたときに、死亡保険金の一部または全部を生前に受け取れる特約です。特約保険料は無料です。",
          ja_kana: "",
          en: "A rider allowing receipt of part/all death benefits while alive if diagnosed with <6 months to live. Rider premium is free.",
          cn: "被诊断余命在6个月以内时，可以生前领取部分或全部死亡保险金的特约。特约保费免费。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "損害保険の基本 (火災・地震・自動車)")]: {
    id: "fp3_risk_05",
    chapter: "損害保険の基本 (火災・地震・自動車)",
    title: { ja: "<ruby>損害保険<rt>そんがいほけん</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>", ja_kana: "", en: "General Insurance Basics", cn: "损害保险基础" },
    sections: [
      {
        title: { ja: "<ruby>地震保険<rt>じしんほけん</rt></ruby>", ja_kana: "", en: "Earthquake Insurance", cn: "地震保险" },
        content: {
          ja: "単独では加入できず、火災保険とセットで加入します。保険金額は火災保険の30%〜50%の範囲で設定します。",
          ja_kana: "",
          en: "Cannot join alone; must be paired with Fire Insurance. Coverage amount is set between 30-50% of the Fire Insurance.",
          cn: "不能单独加入，必须与火灾保险配套加入。保险金额设定为火灾保险的30%至50%。"
        }
      },
      {
        title: { ja: "<ruby>自賠責保険<rt>じばいせきほけん</rt></ruby>", ja_kana: "", en: "Compulsory Auto Liability Insurance", cn: "机动车强制责任险" },
        content: {
          ja: "すべての自動車・原動機付自転車に加入が義務付けられています。補償は対人賠償のみで、対物や運転者自身の怪我は対象外です。",
          ja_kana: "",
          en: "Mandatory for all cars/motorbikes. Covers only bodily injury liability; property damage or driver injury is excluded.",
          cn: "所有汽车和机动自行车必须加入。仅赔偿人身伤害，财产损失或驾驶员自身受伤不在赔偿范围内。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "第三分野の保険 (医療・がん)")]: {
    id: "fp3_risk_06",
    chapter: "第三分野の保険 (医療・がん)",
    title: { ja: "<ruby>第三分野<rt>だいさんぶんや</rt></ruby>の<ruby>保険<rt>ほけん</rt></ruby>", ja_kana: "", en: "Third Sector Insurance", cn: "第三领域保险" },
    sections: [
      {
        title: { ja: "<ruby>がん保険<rt>がんほけん</rt></ruby>", ja_kana: "", en: "Cancer Insurance", cn: "癌症保险" },
        content: {
          ja: "通常、契約から90日間（3ヶ月）程度の<ruby>免責期間<rt>めんせききかん</rt></ruby>（待ち期間）があり、その期間中にがんと診断されても保障されません。",
          ja_kana: "",
          en: "Usually has a 90-day waiting period. No coverage if diagnosed with cancer during this period.",
          cn: "通常有90天（3个月）左右的免责期（等待期），在此期间被诊断为癌症也不予保障。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "保険と税金 (生命保険料控除など)")]: {
    id: "fp3_risk_07",
    chapter: "保険と税金 (生命保険料控除など)",
    title: { ja: "<ruby>保険<rt>ほけん</rt></ruby>と<ruby>税金<rt>ぜいきん</rt></ruby>", ja_kana: "", en: "Insurance and Taxes", cn: "保险与税金" },
    sections: [
      {
        title: { ja: "<ruby>生命保険料控除<rt>せいめいほけんりょうこうじょ</rt></ruby>", ja_kana: "", en: "Life Insurance Premium Deduction", cn: "人寿保险费扣除" },
        content: {
          ja: "「一般」「介護医療」「個人年金」の3つの枠があります。所得税では各枠最大4万円、合計で最大12万円の控除が受けられます。",
          ja_kana: "",
          en: "Three categories: 'General', 'Nursing/Medical', 'Pension'. Max 40k yen deduction per category for Income Tax, max 120k total.",
          cn: "有“一般”、“护理医疗”、“个人年金”三个额度。所得税每个额度最高扣除4万日元，合计最高扣除12万日元。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 3 - Asset Management (Part 3)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_3, "マーケット環境の理解 (景気・金利・物価)")]: {
    id: "fp3_asset_01",
    chapter: "マーケット環境の理解 (景気・金利・物価)",
    title: { ja: "マーケット<ruby>環境<rt>かんきょう</rt></ruby>", ja_kana: "", en: "Market Environment", cn: "市场环境" },
    sections: [
      {
        title: { ja: "<ruby>金利<rt>きんり</rt></ruby>と<ruby>債券価格<rt>さいけんかかく</rt></ruby>", ja_kana: "", en: "Interest Rates & Bond Prices", cn: "利率与债券价格" },
        content: {
          ja: "金利が上がると債券価格は下がり、金利が下がると債券価格は上がります。シーソーの関係にあります。",
          ja_kana: "",
          en: "When interest rates rise, bond prices fall. When rates fall, bond prices rise. A seesaw relationship.",
          cn: "利率上升时债券价格下降，利率下降时债券价格上升。呈跷跷板关系。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "預貯金と金融類似商品")]: {
    id: "fp3_asset_02",
    chapter: "預貯金と金融類似商品",
    title: { ja: "<ruby>預貯金<rt>よちょきん</rt></ruby>", ja_kana: "", en: "Deposits", cn: "储蓄" },
    sections: [
      {
        title: { ja: "<ruby>決済用預金<rt>けっさいようよきん</rt></ruby>", ja_kana: "", en: "Settlement Deposits", cn: "结算用存款" },
        content: {
          ja: "「無利息」「要求払い」「決済サービス提供」の3条件を満たす預金で、預金保険制度により全額保護されます。",
          ja_kana: "",
          en: "Deposits meeting 'No Interest', 'On Demand', 'Settlement Service' conditions are fully protected by Deposit Insurance.",
          cn: "满足“无利息”、“随时支取”、“提供结算服务”三个条件的存款，受存款保险制度全额保护。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "投資信託の仕組みと分類")]: {
    id: "fp3_asset_03",
    chapter: "投資信託の仕組みと分類",
    title: { ja: "<ruby>投資信託<rt>とうししんたく</rt></ruby>", ja_kana: "", en: "Investment Trusts", cn: "投资信托" },
    sections: [
      {
        title: { ja: "<ruby>契約型<rt>けいやくがた</rt></ruby>と<ruby>会社型<rt>かいしゃがた</rt></ruby>", ja_kana: "", en: "Contract Type vs Company Type", cn: "契约型与公司型" },
        content: {
          ja: "日本の一般的な投資信託は「契約型」です。「会社型」の代表例はJ-REIT（不動産投資信託）です。",
          ja_kana: "",
          en: "Typical Japanese trusts are 'Contract Type'. J-REITs are a typical 'Company Type'.",
          cn: "日本一般的投资信托是“契约型”。“公司型”的代表是J-REIT（房地产投资信托）。"
        }
      },
      {
        title: { ja: "ETF (<ruby>上場投資信託<rt>じょうじょうとうししんたく</rt></ruby>)", ja_kana: "", en: "ETF", cn: "ETF (交易型开放式指数基金)" },
        content: {
          ja: "証券取引所に上場しており、株式と同じようにリアルタイムの価格（市場価格）で売買できる投資信託です。",
          ja_kana: "",
          en: "Investment trusts listed on the stock exchange, tradeable at real-time market prices like stocks.",
          cn: "在证券交易所上市，可以像股票一样按实时价格（市场价格）进行买卖的投资信托。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "債券投資 (国債・利回り計算)")]: {
    id: "fp3_asset_04",
    chapter: "債券投資 (国債・利回り計算)",
    title: { ja: "<ruby>債券投資<rt>さいけんとうし</rt></ruby>", ja_kana: "", en: "Bond Investment", cn: "债券投资" },
    sections: [
      {
        title: { ja: "<ruby>個人向け国債<rt>こじんむけこくさい</rt></ruby>", ja_kana: "", en: "JGBs for Individuals", cn: "个人国债" },
        content: {
          ja: "「固定3年」「固定5年」「変動10年」の3種類があります。変動10年は半年ごとに適用金利が見直されます。中途換金しても元本割れしません。",
          ja_kana: "",
          en: "Three types: Fixed 3yr, Fixed 5yr, Floating 10yr. Floating 10yr rate is reviewed semi-annually. No principal loss on early redemption.",
          cn: "有“固定3年”、“固定5年”、“浮动10年”三种。浮动10年每半年调整一次适用利率。中途兑换也不会亏损本金。"
        }
      },
      {
        title: { ja: "<ruby>最終利回り<rt>さいしゅうりまわり</rt></ruby>", ja_kana: "", en: "Yield to Maturity", cn: "最终收益率" },
        content: {
          ja: "債券を購入し、満期償還まで保有した場合の年平均利回りです。",
          ja_kana: "",
          en: "The annual average yield if a bond is purchased and held until maturity.",
          cn: "购买债券并持有至到期偿还时的年平均收益率。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "株式投資 (指標・売買)")]: {
    id: "fp3_asset_05",
    chapter: "株式投資 (指標・売買)",
    title: { ja: "<ruby>株式投資<rt>かぶしきとうし</rt></ruby>", ja_kana: "", en: "Stock Investment", cn: "股票投资" },
    sections: [
      {
        title: { ja: "PERとPBR", ja_kana: "", en: "PER & PBR", cn: "PER与PBR" },
        content: {
          ja: "PER（<ruby>株価収益率<rt>かぶかしゅうえきりつ</rt></ruby>）は「株価÷1株あたり純利益」、PBR（<ruby>株価純資産倍率<rt>かぶかじゅんしさんばいりつ</rt></ruby>）は「株価÷1株あたり純資産」で計算します。低いほど割安です。",
          ja_kana: "",
          en: "PER = Price / EPS. PBR = Price / BPS. Lower values indicate the stock is undervalued.",
          cn: "PER（市盈率）=股价÷每股净利润，PBR（市净率）=股价÷每股净资产。数值越低越便宜。"
        }
      },
      {
        title: { ja: "ROE (<ruby>自己資本利益率<rt>じこしほんりえきりつ</rt></ruby>)", ja_kana: "", en: "ROE", cn: "ROE (净资产收益率)" },
        content: {
          ja: "株主が出資したお金を使って、企業がどれだけ効率よく利益を上げたかを示します。高いほど効率が良いとされます。",
          ja_kana: "",
          en: "Shows how efficiently a company generated profit using shareholder equity. Higher is better.",
          cn: "显示企业利用股东投入的资金创造利润的效率。越高效率越好。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "外貨建商品 (為替リスク)")]: {
    id: "fp3_asset_06",
    chapter: "外貨建商品 (為替リスク)",
    title: { ja: "<ruby>外貨建商品<rt>がいかだてしょうひん</rt></ruby>", ja_kana: "", en: "Foreign Currency Products", cn: "外币产品" },
    sections: [
      {
        title: { ja: "TTSとTTB", ja_kana: "", en: "TTS & TTB", cn: "TTS与TTB" },
        content: {
          ja: "円を外貨に替えるときはTTS（S=Sell、銀行が売る）、外貨を円に戻すときはTTB（B=Buy、銀行が買う）レートを使います。この差が手数料になります。",
          ja_kana: "",
          en: "Use TTS (Bank Sells) when exchanging Yen to Foreign Currency. Use TTB (Bank Buys) when exchanging back. The gap is the fee.",
          cn: "将日元兑换成外币时使用TTS（S=卖出），将外币兑换回日元时使用TTB（B=买入）。这个差额就是手续费。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "金融商品と税金 (NISA・配当控除)")]: {
    id: "fp3_asset_07",
    chapter: "金融商品と税金 (NISA・配当控除)",
    title: { ja: "<ruby>金融商品<rt>きんゆうしょうひん</rt></ruby>の<ruby>税金<rt>ぜいきん</rt></ruby>", ja_kana: "", en: "Financial Taxes", cn: "金融产品税金" },
    sections: [
      {
        title: { ja: "<ruby>源泉分離課税<rt>げんせんぶんりかぜい</rt></ruby>", ja_kana: "", en: "Separate Withholding Tax", cn: "源泉分离课税" },
        content: {
          ja: "利子や配当、譲渡益には原則として20.315%（所得税15%＋復興特別所得税0.315%＋住民税5%）の税金がかかります。",
          ja_kana: "",
          en: "Interest, dividends, and capital gains are taxed at 20.315% (15% Income + 0.315% Reconstruction + 5% Resident).",
          cn: "利息、分红、转让收益原则上征收20.315%的税金（所得税15%+复兴特别所得税0.315%+居民税5%）。"
        }
      },
      {
        title: { ja: "NISA (<ruby>少額投資非課税制度<rt>しょうがくとうしひかぜいせいど</rt></ruby>)", ja_kana: "", en: "NISA", cn: "NISA" },
        content: {
          ja: "「つみたて投資枠」と「成長投資枠」があり、併用可能です。運用益が恒久的に非課税となります。",
          ja_kana: "",
          en: "Features 'Installment Investment Quota' and 'Growth Investment Quota', usable together. Gains are tax-free permanently.",
          cn: "有“积立投资额度”和“成长投资额度”，可同时使用。投资收益永久免税。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "ポートフォリオと分散投資")]: {
    id: "fp3_asset_08",
    chapter: "ポートフォリオと分散投資",
    title: { ja: "<ruby>分散投資<rt>ぶんさんとうし</rt></ruby>", ja_kana: "", en: "Diversified Investment", cn: "分散投资" },
    sections: [
      {
        title: { ja: "<ruby>相関係数<rt>そうかんけいすう</rt></ruby>", ja_kana: "", en: "Correlation Coefficient", cn: "相关系数" },
        content: {
          ja: "-1から+1の範囲で表されます。-1に近いほど、異なる値動きをするため、分散投資の効果が高くなります（リスク低減効果）。",
          ja_kana: "",
          en: "Range from -1 to +1. Closer to -1 means different price movements, leading to higher diversification effect (risk reduction).",
          cn: "范围在-1到+1之间。越接近-1，价格变动越不同，分散投资的效果越高（风险降低效果）。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "金融商品保護制度")]: {
    id: "fp3_asset_09",
    chapter: "金融商品保護制度",
    title: { ja: "<ruby>投資者保護基金<rt>とうししゃほごききん</rt></ruby>", ja_kana: "", en: "Investor Protection Fund", cn: "投资者保护基金" },
    sections: [
      {
        title: { ja: "<ruby>補償対象<rt>ほしょうたいしょう</rt></ruby>", ja_kana: "", en: "Coverage", cn: "补偿对象" },
        content: {
          ja: "証券会社が破綻し、分別管理されていなかった資産がある場合、一人当たり1,000万円まで補償されます。FX取引などは対象外です。",
          ja_kana: "",
          en: "If a brokerage fails and assets weren't segregated, up to 10 million yen per person is covered. FX trading is excluded.",
          cn: "如果证券公司破产且资产未被分别管理，每人最高赔偿1000万日元。FX交易等不在范围内。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 3 - Tax Planning (Part 4)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_3, "日本の税制と税金の分類")]: {
    id: "fp3_tax_01",
    chapter: "日本の税制と税金の分類",
    title: { ja: "<ruby>税金<rt>ぜいきん</rt></ruby>の<ruby>分類<rt>ぶんるい</rt></ruby>", ja_kana: "", en: "Tax Classification", cn: "税金分类" },
    sections: [
      {
        title: { ja: "<ruby>直接税<rt>ちょくせつぜい</rt></ruby>", ja_kana: "", en: "Direct Tax", cn: "直接税" },
        content: {
          ja: "所得税、法人税、相続税など、納税者と担税者が一致する税金です。",
          ja_kana: "",
          en: "Income Tax, Corporate Tax, Inheritance Tax, etc., where taxpayer and bearer are the same.",
          cn: "所得税、法人税、继承税等，纳税人与负税人一致的税金。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "所得税の仕組みと納税義務者")]: {
    id: "fp3_tax_02",
    chapter: "所得税の仕組みと納税義務者",
    title: { ja: "<ruby>所得税<rt>しょとくぜい</rt></ruby>", ja_kana: "", en: "Income Tax", cn: "所得税" },
    sections: [
      {
        title: { ja: "<ruby>課税期間<rt>かぜいきかん</rt></ruby>", ja_kana: "", en: "Tax Period", cn: "课税期间" },
        content: {
          ja: "毎年1月1日から12月31日までの1年間の所得に対して課税されます。",
          ja_kana: "",
          en: "Taxed on income from Jan 1 to Dec 31 each year.",
          cn: "对每年1月1日至12月31日的一年所得征税。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "10種類の所得 (給与・事業・不動産など)")]: {
    id: "fp3_tax_03",
    chapter: "10種類の所得 (給与・事業・不動産など)",
    title: { ja: "10<ruby>種類<rt>しゅるい</rt></ruby>の<ruby>所得<rt>しょとく</rt></ruby>", ja_kana: "", en: "10 Types of Income", cn: "10种所得" },
    sections: [
      {
        title: { ja: "<ruby>退職所得<rt>たいしょくしょとく</rt></ruby>", ja_kana: "", en: "Retirement Income", cn: "退职所得" },
        content: {
          ja: "（収入金額 − 退職所得控除額）× 1/2 で計算します。分離課税のため、他の所得と合算せずに税額を計算します。",
          ja_kana: "",
          en: "Calculated as (Income - Deduction) * 1/2. Separately taxed, so not aggregated with other income.",
          cn: "计算公式：（收入金额 - 退职所得扣除额）× 1/2。因采用分离课税，不与其他所得合并计算税额。"
        }
      },
      {
        title: { ja: "<ruby>一時所得<rt>いちじしょとく</rt></ruby>", ja_kana: "", en: "Occasional Income", cn: "偶然所得" },
        content: {
          ja: "生命保険の満期金などが該当します。（総収入 − 支出金額 − 特別控除50万円）× 1/2 を他の所得と合算します。",
          ja_kana: "",
          en: "Includes life insurance maturity benefits. (Revenue - Expenses - 500k deduction) * 1/2 is aggregated.",
          cn: "包括人寿保险满期金等。（总收入 - 支出金额 - 特别扣除50万日元）× 1/2 与其他所得合并。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "所得控除 (人的控除・物的控除)")]: {
    id: "fp3_tax_04",
    chapter: "所得控除 (人的控除・物的控除)",
    title: { ja: "<ruby>所得控除<rt>しょとくこうじょ</rt></ruby>", ja_kana: "", en: "Income Deductions", cn: "所得扣除" },
    sections: [
      {
        title: { ja: "<ruby>基礎控除<rt>きそこうじょ</rt></ruby>", ja_kana: "", en: "Basic Deduction", cn: "基础扣除" },
        content: {
          ja: "合計所得金額が2,400万円以下の場合、一律48万円が控除されます。",
          ja_kana: "",
          en: "A flat 480,000 yen deduction if total income is 24 million yen or less.",
          cn: "合计所得金额在2400万日元以下时，一律扣除48万日元。"
        }
      },
      {
        title: { ja: "<ruby>医療費控除<rt>いりょうひこうじょ</rt></ruby>", ja_kana: "", en: "Medical Expense Deduction", cn: "医疗费扣除" },
        content: {
          ja: "年間の支払医療費が「10万円」または「総所得金額等の5%」のいずれか少ない方を超えた部分が控除されます（上限200万円）。",
          ja_kana: "",
          en: "Deduct amount exceeding the lesser of '100k yen' or '5% of total income' (max 2M).",
          cn: "扣除年度支付医疗费超过“10万日元”或“总所得金额等的5%”中较小者的部分（上限200万日元）。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "税額控除 (住宅ローン控除)")]: {
    id: "fp3_tax_05",
    chapter: "税額控除 (住宅ローン控除)",
    title: { ja: "<ruby>住宅<rt>じゅうたく</rt></ruby>ローン<ruby>控除<rt>こうじょ</rt></ruby>", ja_kana: "", en: "Housing Loan Deduction", cn: "住房贷款扣除" },
    sections: [
      {
        title: { ja: "<ruby>適用要件<rt>てきようようけん</rt></ruby>", ja_kana: "", en: "Requirements", cn: "适用条件" },
        content: {
          ja: "床面積が50㎡以上であること、合計所得金額が2,000万円以下であること、返済期間が10年以上あることなどが必要です。",
          ja_kana: "",
          en: "Floor area 50m2+, total income under 20M yen, repayment period 10yrs+, etc.",
          cn: "需满足建筑面积50平米以上、合计所得金额2000万日元以下、还款期10年以上等条件。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "所得税の申告と納付")]: {
    id: "fp3_tax_06",
    chapter: "所得税の申告と納付",
    title: { ja: "<ruby>確定申告<rt>かくていしんこく</rt></ruby>", ja_kana: "", en: "Tax Return", cn: "确定申报" },
    sections: [
      {
        title: { ja: "<ruby>申告期間<rt>しんこくきかん</rt></ruby>", ja_kana: "", en: "Filing Period", cn: "申报期间" },
        content: {
          ja: "原則として、翌年の2月16日から3月15日までの間に住所地の税務署長に対して行います。",
          ja_kana: "",
          en: "Principally from Feb 16 to Mar 15 of the following year, to the local tax office.",
          cn: "原则上在次年2月16日至3月15日之间向住所地税务署长申报。"
        }
      },
      {
        title: { ja: "<ruby>準確定申告<rt>じゅんかくていしんこく</rt></ruby>", ja_kana: "", en: "Quasi-final Return", cn: "准确定申报" },
        content: {
          ja: "納税者が死亡した場合、相続人は相続の開始を知った日の翌日から4ヶ月以内に申告しなければなりません。",
          ja_kana: "",
          en: "If a taxpayer dies, heirs must file within 4 months from the day after learning of the inheritance.",
          cn: "纳税人死亡时，继承人必须在得知继承开始次日起4个月内申报。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "個人住民税・個人事業税")]: {
    id: "fp3_tax_07",
    chapter: "個人住民税・個人事業税",
    title: { ja: "<ruby>住民税<rt>じゅうみんぜい</rt></ruby>", ja_kana: "", en: "Resident Tax", cn: "居民税" },
    sections: [
      {
        title: { ja: "<ruby>賦課課税方式<rt>ふかかぜいほうしき</rt></ruby>", ja_kana: "", en: "Assessment Method", cn: "赋课课税方式" },
        content: {
          ja: "前年の所得に基づき、自治体が税額を計算して通知します（申告不要）。6月から翌年5月にかけて納付します。",
          ja_kana: "",
          en: "Municipality calculates tax based on prev year income (no filing needed). Paid from June to May.",
          cn: "根据前一年所得，由自治体计算税额并通知（无需申报）。从6月到次年5月缴纳。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 3 - Real Estate (Part 5)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_3, "不動産の調査と登記")]: {
    id: "fp3_re_01",
    chapter: "不動産の調査と登記",
    title: { ja: "<ruby>不動産登記<rt>ふどうさんとうき</rt></ruby>", ja_kana: "", en: "Real Estate Registration", cn: "不动产登记" },
    sections: [
      {
        title: { ja: "<ruby>対抗要件<rt>たいこうようけん</rt></ruby>", ja_kana: "", en: "Requirement for Perfection", cn: "对抗要件" },
        content: {
          ja: "不動産の売買では、先に登記を備えた者が第三者に対して所有権を主張できます（早い者勝ち）。",
          ja_kana: "",
          en: "In real estate sales, the one who registers first can claim ownership against third parties.",
          cn: "在不动产买卖中，先进行登记的人可以向第三方主张所有权（先到先得）。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "不動産の取引 (売買契約・手付金)")]: {
    id: "fp3_re_02",
    chapter: "不動産の取引 (売買契約・手付金)",
    title: { ja: "<ruby>手付金<rt>てつけきん</rt></ruby>", ja_kana: "", en: "Earnest Money", cn: "定金" },
    sections: [
      {
        title: { ja: "<ruby>解約手付<rt>かいやくてつけ</rt></ruby>", ja_kana: "", en: "Cancellation Earnest Money", cn: "解约定金" },
        content: {
          ja: "相手方が履行に着手するまでは、買主は手付金を放棄し、売主は手付金の倍額を返還することで契約を解除できます。",
          ja_kana: "",
          en: "Until the other party starts performance, buyer can cancel by forfeiting deposit, seller by returning double.",
          cn: "在对方着手履行前，买方放弃定金，卖方双倍返还定金，即可解除合同。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "借地借家法")]: {
    id: "fp3_re_03",
    chapter: "借地借家法",
    title: { ja: "<ruby>借地借家法<rt>しゃくちしゃっかほう</rt></ruby>", ja_kana: "", en: "Land & Building Lease Law", cn: "借地借家法" },
    sections: [
      {
        title: { ja: "<ruby>普通借家契約<rt>ふつうしゃっかけいやく</rt></ruby>", ja_kana: "", en: "Ordinary Lease", cn: "普通租赁合同" },
        content: {
          ja: "契約期間が満了しても、正当な事由がない限り貸主は更新を拒絶できず、契約は更新されます。",
          ja_kana: "",
          en: "Even if the term expires, the landlord cannot refuse renewal without justifiable grounds; contract renews.",
          cn: "即使合同期满，除非有正当理由，否则出租人不能拒绝续租，合同将更新。"
        }
      },
      {
        title: { ja: "<ruby>定期借家契約<rt>ていきしゃっかけいやく</rt></ruby>", ja_kana: "", en: "Fixed-Term Lease", cn: "定期租赁合同" },
        content: {
          ja: "更新がなく、期間満了により契約が確定的に終了します。契約は公正証書等で書面で行う必要があります。",
          ja_kana: "",
          en: "No renewal; contract ends definitely at term expiry. Must be done in writing (notarial deed etc).",
          cn: "无更新，期满合同确定终止。必须以公证书等书面形式订立。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "建築基準法 (用途地域・建ぺい率・容積率)")]: {
    id: "fp3_re_04",
    chapter: "建築基準法 (用途地域・建ぺい率・容積率)",
    title: { ja: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>", ja_kana: "", en: "Building Standards Act", cn: "建筑基准法" },
    sections: [
      {
        title: { ja: "<ruby>建ぺい率<rt>けんぺいりつ</rt></ruby>", ja_kana: "", en: "Building Coverage Ratio", cn: "建蔽率" },
        content: {
          ja: "敷地面積に対する建築面積の割合です（建ぺい率 ＝ 建築面積 ÷ 敷地面積）。",
          ja_kana: "",
          en: "Ratio of building area to lot area.",
          cn: "建筑面积占基地面积的比例（建蔽率 = 建筑面积 ÷ 基地面积）。"
        }
      },
      {
        title: { ja: "<ruby>容積率<rt>ようせきりつ</rt></ruby>", ja_kana: "", en: "Floor Area Ratio", cn: "容积率" },
        content: {
          ja: "敷地面積に対する延べ面積（床面積の合計）の割合です。",
          ja_kana: "",
          en: "Ratio of total floor area to lot area.",
          cn: "总建筑面积（地板面积总和）占基地面积的比例。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "都市計画法")]: {
    id: "fp3_re_05",
    chapter: "都市計画法",
    title: { ja: "<ruby>都市計画法<rt>としけいかくほう</rt></ruby>", ja_kana: "", en: "City Planning Act", cn: "都市计划法" },
    sections: [
      {
        title: { ja: "<ruby>市街化区域<rt>しがいかくいき</rt></ruby>", ja_kana: "", en: "Urbanization Promotion Area", cn: "市街化区域" },
        content: {
          ja: "すでに市街地である区域、または概ね10年以内に優先的かつ計画的に市街化を図るべき区域です。",
          ja_kana: "",
          en: "Areas already urbanized or prioritized for urbanization within approx 10 years.",
          cn: "已经是市区的区域，或应在大约10年内优先并有计划地进行城市化的区域。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "不動産取得と保有の税金")]: {
    id: "fp3_re_06",
    chapter: "不動産取得と保有の税金",
    title: { ja: "<ruby>保有税<rt>ほゆうぜい</rt></ruby>", ja_kana: "", en: "Holding Taxes", cn: "保有税" },
    sections: [
      {
        title: { ja: "<ruby>固定資産税<rt>こていしさんぜい</rt></ruby>", ja_kana: "", en: "Property Tax", cn: "固定资产税" },
        content: {
          ja: "毎年1月1日時点の所有者に課税されます。標準税率は1.4%です。住宅用地には課税標準の特例（軽減措置）があります。",
          ja_kana: "",
          en: "Taxed on the owner as of Jan 1 each year. Standard rate 1.4%. Reductions apply for residential land.",
          cn: "对每年1月1日的持有人征税。标准税率为1.4%。住宅用地有课税标准的特例（减免措施）。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "不動産譲渡の税金")]: {
    id: "fp3_re_07",
    chapter: "不動産譲渡の税金",
    title: { ja: "<ruby>譲渡所得<rt>じょうとしょとく</rt></ruby>", ja_kana: "", en: "Capital Gains Tax", cn: "转让所得税" },
    sections: [
      {
        title: { ja: "<ruby>短期<rt>たんき</rt></ruby>と<ruby>長期<rt>ちょうき</rt></ruby>", ja_kana: "", en: "Short-term vs Long-term", cn: "短期与长期" },
        content: {
          ja: "譲渡した年の1月1日時点で所有期間が5年以下の場合は「短期譲渡所得」（税率39.63%）、5年超は「長期譲渡所得」（税率20.315%）となります。",
          ja_kana: "",
          en: "Owned <=5 years on Jan 1 is 'Short-term' (39.63%). >5 years is 'Long-term' (20.315%).",
          cn: "转让当年1月1日持有期5年以下为“短期转让所得”（税率39.63%），超5年为“长期”（20.315%）。"
        }
      },
      {
        title: { ja: "3,000万円<ruby>特別控除<rt>とくべつこうじょ</rt></ruby>", ja_kana: "", en: "30 Million Yen Deduction", cn: "3000万日元特别扣除" },
        content: {
          ja: "居住用財産（マイホーム）を売却した場合、所有期間に関わらず譲渡益から最高3,000万円を控除できます。",
          ja_kana: "",
          en: "Selling a primary residence allows up to 30M yen deduction from gains, regardless of ownership period.",
          cn: "出售居住用财产（自住房）时，无论持有期长短，最高可从收益中扣除3000万日元。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 3 - Inheritance (Part 6)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_3, "贈与の基本と贈与税")]: {
    id: "fp3_inh_01",
    chapter: "贈与の基本と贈与税",
    title: { ja: "<ruby>暦年課税<rt>れきねんかぜい</rt></ruby>", ja_kana: "", en: "Calendar Year Taxation", cn: "历年课税" },
    sections: [
      {
        title: { ja: "<ruby>基礎控除<rt>きそこうじょ</rt></ruby>", ja_kana: "", en: "Basic Deduction", cn: "基础扣除" },
        content: {
          ja: "受贈者1人につき年間110万円まで非課税です。これを超える部分に課税されます。",
          ja_kana: "",
          en: "Tax-free up to 1.1 million yen per year per donee. Excess is taxed.",
          cn: "每位受赠人每年110万日元以内免税。超过部分征税。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "相続の開始と相続人・相続分")]: {
    id: "fp3_inh_02",
    chapter: "相続の開始と相続人・相続分",
    title: { ja: "<ruby>法定相続人<rt>ほうていそうぞくにん</rt></ruby>", ja_kana: "", en: "Statutory Heirs", cn: "法定继承人" },
    sections: [
      {
        title: { ja: "<ruby>相続順位<rt>そうぞくじゅんい</rt></ruby>", ja_kana: "", en: "Order of Inheritance", cn: "继承顺序" },
        content: {
          ja: "配偶者は常に相続人です。第1順位は「子」、第2順位は「直系尊属（親）」、第3順位は「兄弟姉妹」です。",
          ja_kana: "",
          en: "Spouse is always an heir. 1st rank: Children. 2nd: Lineal ascendants (parents). 3rd: Siblings.",
          cn: "配偶始终是继承人。第一顺序是“子女”，第二顺序是“直系尊亲属（父母）”，第三顺序是“兄弟姐妹”。"
        }
      },
      {
        title: { ja: "<ruby>法定相続分<rt>ほうていそうぞくぶん</rt></ruby>", ja_kana: "", en: "Statutory Share", cn: "法定继承份额" },
        content: {
          ja: "配偶者と子が相続する場合、配偶者1/2、子1/2です。配偶者と親の場合、配偶者2/3、親1/3です。",
          ja_kana: "",
          en: "Spouse & Children: Spouse 1/2, Children 1/2. Spouse & Parents: Spouse 2/3, Parents 1/3.",
          cn: "配偶与子女继承时，配偶1/2，子女1/2。配偶与父母时，配偶2/3，父母1/3。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "遺言と遺留分")]: {
    id: "fp3_inh_03",
    chapter: "遺言と遺留分",
    title: { ja: "<ruby>遺言<rt>ゆいごん</rt></ruby>と<ruby>遺留分<rt>いりゅうぶん</rt></ruby>", ja_kana: "", en: "Wills and Legitime", cn: "遗嘱与遗留份" },
    sections: [
      {
        title: { ja: "<ruby>自筆証書遺言<rt>じひつしょうしょゆいごん</rt></ruby>", ja_kana: "", en: "Holograph Will", cn: "自书遗嘱" },
        content: {
          ja: "全文を自書し、日付・氏名を書いて押印します。財産目録のみパソコン作成が可能です。",
          ja_kana: "",
          en: "Must handwrite full text, date, name, and seal. Only property inventory can be typed.",
          cn: "全文必须亲笔书写，注明日期、姓名并盖章。仅财产目录可用电脑制作。"
        }
      },
      {
        title: { ja: "<ruby>遺留分<rt>いりゅうぶん</rt></ruby>", ja_kana: "", en: "Legitime", cn: "遗留份" },
        content: {
          ja: "兄弟姉妹以外の相続人に最低限保障された遺産の取り分です。遺言でもこれを侵害することはできません。",
          ja_kana: "",
          en: "Minimum guaranteed share for heirs other than siblings. Even a will cannot infringe on this.",
          cn: "除兄弟姐妹外的继承人受最低保障的遗产份额。即使是遗嘱也不能侵犯这一点。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "相続税の仕組みと計算")]: {
    id: "fp3_inh_04",
    chapter: "相続税の仕組みと計算",
    title: { ja: "<ruby>相続税<rt>そうぞくぜい</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>", ja_kana: "", en: "Inheritance Tax Calculation", cn: "继承税计算" },
    sections: [
      {
        title: { ja: "<ruby>基礎控除額<rt>きそこうじょがく</rt></ruby>", ja_kana: "", en: "Basic Deduction", cn: "基础扣除额" },
        content: {
          ja: "「3,000万円 ＋ 600万円 × 法定相続人の数」です。遺産総額がこの額以下なら相続税はかかりません。",
          ja_kana: "",
          en: "30 million + 6 million * number of statutory heirs. No tax if total estate is below this.",
          cn: "“3000万日元 + 600万日元 × 法定继承人数”。遗产总额在此金额以下则不征收继承税。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "相続税の申告と納付")]: {
    id: "fp3_inh_05",
    chapter: "相続税の申告と納付",
    title: { ja: "<ruby>申告期限<rt>しんこくきげん</rt></ruby>", ja_kana: "", en: "Filing Deadline", cn: "申报期限" },
    sections: [
      {
        title: { ja: "10ヶ月以内", ja_kana: "", en: "Within 10 Months", cn: "10个月以内" },
        content: {
          ja: "相続の開始を知った日の翌日から10ヶ月以内に、被相続人の住所地の税務署に申告・納付します。",
          ja_kana: "",
          en: "Must file and pay to the tax office of the deceased's residence within 10 months of learning of inheritance.",
          cn: "必须在得知继承开始次日起10个月内，向被继承人住所地的税务署申报并缴纳。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "相続財産の評価 (土地・建物)")]: {
    id: "fp3_inh_06",
    chapter: "相続財産の評価 (土地・建物)",
    title: { ja: "<ruby>財産評価<rt>ざいさんひょうか</rt></ruby>", ja_kana: "", en: "Property Valuation", cn: "财产评估" },
    sections: [
      {
        title: { ja: "<ruby>路線価方式<rt>ろせんかほうしき</rt></ruby>", ja_kana: "", en: "Road Rating Method", cn: "路线价方式" },
        content: {
          ja: "市街地の宅地評価に使われます。道路ごとの価格（路線価）に面積を掛けて計算します。",
          ja_kana: "",
          en: "Used for urban residential land. Calculated by multiplying the road price by area.",
          cn: "用于市区住宅用地评估。通过将每条道路的价格（路线价）乘以面积来计算。"
        }
      },
      {
        title: { ja: "<ruby>小規模宅地等<rt>しょうきぼたくちとう</rt></ruby>の<ruby>特例<rt>とくれい</rt></ruby>", ja_kana: "", en: "Small Scale Residential Land Exception", cn: "小规模住宅用地特例" },
        content: {
          ja: "被相続人が住んでいた土地（特定居住用宅地等）は、330㎡まで80%減額して評価されます。",
          ja_kana: "",
          en: "Land lived in by the deceased (specific residential land) is devalued by 80% for up to 330m2.",
          cn: "被继承人居住的土地（特定居住用宅地等），330平米以内的部分减额80%评估。"
        }
      }
    ]
  },
  [getKey(FPLevel.LEVEL_3, "金融資産の相続評価")]: {
    id: "fp3_inh_07",
    chapter: "金融資産の相続評価",
    title: { ja: "<ruby>上場株式<rt>じょうじょうかぶしき</rt></ruby>の<ruby>評価<rt>ひょうか</rt></ruby>", ja_kana: "", en: "Listed Stock Valuation", cn: "上市股票评估" },
    sections: [
      {
        title: { ja: "4つの<ruby>価額<rt>かがく</rt></ruby>", ja_kana: "", en: "Four Prices", cn: "四种价格" },
        content: {
          ja: "1. 課税時期の終値、2. 当月の平均、3. 前月の平均、4. 前々月の平均、のうち最も低い価額を選べます。",
          ja_kana: "",
          en: "Choose the lowest of: 1. Closing price on tax date, 2. Monthly avg, 3. Prev month avg, 4. Prev-prev month avg.",
          cn: "可选择以下最低价：1. 课税时期的收盘价，2. 当月平均价，3. 前月平均价，4. 前前月平均价。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 2 - Life Planning (Part 1) (Sample)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_2, "FPの実務とコンプライアンス")]: {
    id: "fp2_lp_01",
    chapter: "FPの実務とコンプライアンス",
    title: { ja: "FPの<ruby>実務<rt>じつむ</rt></ruby>", ja_kana: "", en: "FP Practice", cn: "FP实务" },
    sections: [
      {
        title: { ja: "<ruby>関連業法<rt>かんれんぎょうほう</rt></ruby>", ja_kana: "", en: "Related Laws", cn: "相关法规" },
        content: {
          ja: "弁護士法、税理士法、金融商品取引法など、隣接する専門家の独占業務を侵害しないよう注意が必要です。",
          ja_kana: "",
          en: "Care must be taken not to infringe on exclusive business of adjacent experts like lawyers and tax accountants.",
          cn: "需注意不得侵犯律师、税理士、金融商品交易法等相邻专家的独占业务。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 2 - Risk Management (Part 2) (Sample)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_2, "保険約款と法律")]: {
    id: "fp2_risk_01",
    chapter: "保険約款と法律",
    title: { ja: "<ruby>保険法<rt>ほけんほう</rt></ruby>", ja_kana: "", en: "Insurance Act", cn: "保险法" },
    sections: [
      {
        title: { ja: "<ruby>告知義務違反<rt>こくちぎむいはん</rt></ruby>", ja_kana: "", en: "Breach of Duty of Disclosure", cn: "违反告知义务" },
        content: {
          ja: "故意または重大な過失により事実を告げなかった場合、保険会社は契約を解除できます。",
          ja_kana: "",
          en: "If facts are not disclosed due to intent or gross negligence, the insurer can terminate the contract.",
          cn: "因故意或重大过失未告知事实的，保险公司可以解除合同。"
        }
      }
    ]
  },

  // ==================================================================================
  // FP Level 2 - Asset Management (Part 3) (Sample)
  // ==================================================================================
  [getKey(FPLevel.LEVEL_2, "経済指標の読み方 (GDP・日銀短観)")]: {
    id: "fp2_asset_01",
    chapter: "経済指標の読み方 (GDP・日銀短観)",
    title: { ja: "<ruby>経済指標<rt>けいざいしひょう</rt></ruby>", ja_kana: "", en: "Economic Indicators", cn: "经济指标" },
    sections: [
      {
        title: { ja: "GDP", ja_kana: "", en: "GDP", cn: "GDP" },
        content: {
          ja: "国内で生産された付加価値の合計です。実質GDPの成長率が経済成長率と呼ばれます。",
          ja_kana: "",
          en: "Total value added produced domestically. Real GDP growth rate is called economic growth rate.",
          cn: "国内生产的附加值总和。实际GDP增长率被称为经济增长率。"
        }
      }
    ]
  },
};

export const getStaticStudyNote = (level: FPLevel, chapter: string): StudyNote | null => {
  const key = getKey(level, chapter);
  return STATIC_STUDY_NOTES[key] || null;
};
