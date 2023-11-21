import express from 'express'
import { createCurrency,  getAllCurrency, getSingleCurrency} from '../controllers/currencyController.js'

const router = express.Router();

router.post('/create',createCurrency);
router.get('/getSingleCurrency/:id', getSingleCurrency);
router.get('/',getAllCurrency);


export default router;