import * as knexCleaner from 'knex-cleaner';

import db from '../src/knex';

const options = {
  mode: 'truncate',
  ignoreTables: [
    // 'product_categories',
    // 'inventory_items',
    // 'shop_channels',
    // 'products',
    // 'shop_product_skus',
    // 'orders',
    // 'payments',
    // 'order_details',
    // 'order_detail_options',
    // 'product_attributes',
    // 'product_option_values',
    // 'product_attribute_values',
  ],
};
knexCleaner.clean(db, options).then(() => {
  console.log('clean up completed');
  process.exit(0);
});
