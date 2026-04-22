export namespace API {
  export type Res<T> = Omit<Response, "body"> & { body: T };

  export interface Stage {
    id: number;
    stage_name: string;
    total_tokens: string;
    total_tokens_sold: string;
    tokens_available: string;
    token_price: string;
    cumulative_usd_raised: string | null;
    cumulative_tokens_sold: string | null;
    next_stage_target_usd: string | null;
    next_stage_target_tokens: string | null;
    next_stage_price: string | null;
    overflow_duration_seconds: number;
    overflow_started: string | null;
    overflow_tokens_sold: string;
    overflow_end: string | null;
    in_overflow_phase: boolean;
  }

  export interface Info {
    holders: string;
    transactions: string;
    main_payment_wallet_address: string;
  }

  export interface PaymentToken {
    id: number;
    name: string;
    symbol: string;
    price: string;
    chain: string;
    nowpayments_id: string | null;
    nowpayments_minimum: string | null;
  }

  export type TransactionHistoryItem = {
    id: number;
    project: string;
    stage_name: string | null;
    wallet_address: string;
    transaction_hash: string;
    payment_token_name: string;
    payment_token_amount: string;
    payment_usd_amount: string;
    tokens_bought: string | null;
    type: string;
    status:
      | "pending"
      | "processing"
      | "completed"
      | "failed"
      | "expired"
      | "refunded"
      | "finalising"
      | "error";
    created_at: string;
  };

  export const defaultTransactionHistoryItem: TransactionHistoryItem = {
    id: 0,
    project: "",
    stage_name: null,
    wallet_address: "",
    transaction_hash: "",
    payment_token_name: "",
    payment_usd_amount: "123",
    tokens_bought: null,
    status: "pending",
    created_at: new Date().toISOString(),
    payment_token_amount: "123123",
    type: "",
  };

  export type PurchaseTransactionHistoryItemV2 = {
    created_at: string;
    id: number;
    payment_token_amount: string;
    payment_token_name: string | null;
    payment_usd_amount: string;
    project_id: string;
    record_type: "transaction";
    stage_name: string | null;
    status: API.TransactionHistoryItem["status"] | null;
    tokens_bought: string | null;
    transaction_hash: string | null;
    type: "external" | "blockchain";
    wallet_address: string;
  };

  export type ManualTransactionHistoryItemV2 = {
    authoriser: number;
    created_at: string;
    id: number;
    project_id: string;
    reason: string;
    record_type: "manual_transaction";
    status: API.TransactionHistoryItem["status"] | null;
    tokens_bought: string;
    wallet_address: string;
  };

  export type BonusTransactionHistoryItemV2 = {
    bonus_token_amount: string;
    bonus_type: "bonus_code" | "referral" | "referrer";
    created_at: string;
    id: number;
    identifier: string;
    parent_transaction_hash: string;
    parent_transaction_id: string;
    project_id: string;
    record_type: "bonus_transaction";
    wallet_address: string;
    status?: undefined;
  };

  export type TransactionHistoryItemV2 =
    | PurchaseTransactionHistoryItemV2
    | ManualTransactionHistoryItemV2
    | BonusTransactionHistoryItemV2;

  export const defaultTransactionHistoryItemV2: PurchaseTransactionHistoryItemV2 =
    {
      id: 0,
      stage_name: null,
      wallet_address: "",
      transaction_hash: "",
      payment_token_name: "",
      payment_usd_amount: "123",
      tokens_bought: null,
      status: "pending",
      created_at: new Date().toISOString(),
      payment_token_amount: "123123",
      project_id: "predict",
      record_type: "transaction",
      type: "blockchain",
    };

  export type BonusTransactionHistoryItem = {
    id: number;
    transaction_id: number;
    wallet_address: string;
    bonus_token_amount: string;
    type: "rank" | "referral" | "referrer" | "bonus_code";
    identifier: string;
  };

  export type SweResponse = {
    message: string;
  };

  export interface Token {
    token: string;
    expires: string;
  }

  export interface User {
    wallet_address: string;
    total_tokens: string;
    referral_code: string | null;
    referral_count: number;
    referred_by: string | null;
    total_referral_usd_rewards: string;
    claim_wallet_address: string;
  }

  export interface LeaderboardEntry {
    rank: string;
    wallet_address: string;
    referral_count: string;
    total_spent_usd: string;
    total_earned_tokens: string;
  }

  export interface PriceChartEntry {
    time: string;
    average_price: string;
  }

  export interface Transaction {
    amount_received: number;
    burning_percent: number | null;
    created_at: string;
    expiration_estimate_date: string;
    ipn_callback_url: string;
    is_fee_paid_by_user: boolean;
    is_fixed_rate: boolean;
    network: string;
    network_precision: number | null;
    order_description: string;
    order_id: string;
    pay_address: string;
    pay_amount: number;
    pay_currency: string;
    payin_extra_id: string | null;
    payment_id: string;
    payment_status: "waiting" | string;
    price_amount: number;
    price_currency: string;
    product: string;
    purchase_id: string;
    smart_contract: null;
    time_limit: null;
    type: string;
    updated_at: string;
    valid_until: string;
  }

  export type StakeData = {
    total_staked: string;
  };

  export type UserStakeData = {
    daily_interest: string;
    total_staked: string;
    total_earnings: string;
    total_can_stake: string;
  };

  export type Poll = {
    id: number;
    options: {
      id: string;
      title: string;
      votes: string;
    }[];
    project_id: string;
    title: string;
    end_date: string;
  };

  export type PollVote = {
    poll_id: number;
    option_id: string;
    votes: string;
  };

  export type BonusCode = {
    percentage: number;
    message: string;
    min_spend: number;
  };

  export type UserRankData = {
    can_level_up: boolean;
    current_level: number;
    current_rank: Rank | null;
    usd_to_next_level: number;
    usd_to_next_rank: number | null;
    ranks: Rank[];
  };
  export type Rank = {
    level: number;
    rank: string;
    reward: string;
    bonus_percentage: number;
  };

  export type ReferralBonuses = {
    is_referred: boolean;
    referral_token_bonus_percentage: number;
    referral_payout_percentage: number;
    min_referral_spend: number;
  };

  export type CardTransaction = {
    clickId: string;
    signedData: {
      address: string;
      commodity: string;
      commodity_amount: number;
      network: string;
      sc_address: string;
      sc_input_data: string;
      signature: string;
    };
  };

  export type Banner = {
    id: number;
    desktop_image_url: string;
    mobile_image_url: string;
    ordering: number;
    click_url: string | null;
  };
}
