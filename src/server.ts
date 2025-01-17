import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { ProductRoute } from './routes/product.route';
import { CustomerRoute } from './routes/customer.route';
import { InventoryRoute } from './routes/inventory.route';
import { CheckoutRoute } from './routes/checkout.routes';
import { InvoiceRoute } from './routes/invoice.route';

ValidateEnv();

const app = new App([
  new UserRoute(),
  new AuthRoute(),
  new ProductRoute(),
  new CustomerRoute(),
  new InventoryRoute(),
  new CheckoutRoute(),
  new InvoiceRoute(),
]);

app.listen();
