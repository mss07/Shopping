import express from  'express';
import { userSignUp , userLogIn} from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';


const router = express.Router();
//front end me lane ke lia api jo client me hai vaha se lana h 
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// routter.get("ENDPOIT", FUNCTION)


export default router;