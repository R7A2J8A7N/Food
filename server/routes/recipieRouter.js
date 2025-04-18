const express = require("express")
const recipieController = require("../controllers/recipieController")
const router = express.Router();
const auth = require("../middleware/auth")


router.get("/",recipieController.homepage)
router.get("/recipe/:id",recipieController.exploreRecipe)
router.get("/categories/:id",recipieController.exploreCategories)
router.post("/search",recipieController.searchRecipe)
router.get('/exploreLatest', recipieController.exploreLatest);
router.get('/exploreRandom', recipieController.exploreRandom);
router.get('/submitRecipe',auth, recipieController.submitRecipe);
router.post('/submitRecipe',auth , recipieController.submitRecipeonPost);
router.get('/contact', auth,recipieController.contact);
router.post('/contact', auth,recipieController.contactonPost);
router.get('/userDashboard', auth,recipieController.userDashboard);
router.post("/userDashboard",recipieController.deleteRecipie)
router.post("/EditRecipie/:id",recipieController.editRecipeonputs);
router.get("/EditRecipie/:id",recipieController.editRecipe);
router.post("/recipieinsert",recipieController.insertdummy);

router.get('*',recipieController.errorpage);  


module.exports = router;  