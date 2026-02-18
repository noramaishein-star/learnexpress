import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  let name = 'Nora Mai';
  let age = 17;
  let fruits = [
    'Mango',
    'Pear',
    'Orange',
    'Coconut',
    'Melon',
  ];
  res.render('index.njk', {name, age, fruits});
});

router.get('/about', (req, res) => {
  res.render('about.njk')
});


router.get('/contact', (req, res) => {
  res.render('contact.njk')
});

router.get('/form', (req, res) => {
  res.render('form.njk')
}); 

router.get('/answers', (req, res) => {
  let answers  = req.query;
  answers.cool = req.query.cool === 'on' ? true : false;
  answers.age = parseInt(answers.age);
  answers.like = parseInt(answers.like);
  res.render('answers.njk', answers);
});  

router.post('/answers', (req, res) => {
  let answers  = req.body;
  answers.cool = req.query.cool === 'on' ? true : false;
  answers.age = parseInt(answers.age);
  answers.like = parseInt(answers.like);
  res.render('answers.njk', answers);
}); 

export default router;