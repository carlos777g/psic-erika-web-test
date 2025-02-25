import { Router } from 'express';
import { 
  renderHome, 
  renderAbout, 
  renderPsiconfort, 
  renderTerapiaOnline 
} from '../controllers/indexController.js';

const router = Router();

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/psiconfort', renderPsiconfort);
router.get('/terapia_online', renderTerapiaOnline);

export default router;



