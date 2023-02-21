import { app } from './app'
import { clientRouter } from './router/clientRouter'
import { orderRouter } from './router/orderRouter'
import { productRouter } from './router/productRouter'

app.use("/client", clientRouter)
app.use("/product", productRouter)
app.use("/order", orderRouter)