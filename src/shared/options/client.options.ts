export const queryClientSelect = {
  relations: ['account'],
  withDeleted: false,
  select: {
    id: true,
    name: true,
    document: true,
    birth_date: true,
    create_date: true,
    updatedAt: false,
    deletedAt: false,
    account: {
      id: true,
      balance: true,
      daily_withdrawal_limit: true,
      account_type: true,
      active: true,
      create_date: true,
    },
  },
};
