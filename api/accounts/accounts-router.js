const router = require('express').Router()

router.get('/', (req, res, next) => {
  try{
    throw new Error('argh!!!')
  } catch (err) {
    next({ status: 422, message: 'this is horrible'})// DO YOUR MAGIC
}})

router.get('/:id', (req, res, next) => {
  try{
    
  } catch (err) {
    next(err)// DO YOUR MAGIC
}})

router.post('/', (req, res, next) => {
  try{
    
  } catch (err) {
    next(err)// DO YOUR MAGIC
}})

router.put('/:id', (req, res, next) => {
  try{
    
  } catch (err) {
    next(err)// DO YOUR MAGIC
}});

router.delete('/:id', (req, res, next) => {
  try{
    
  } catch (err) {
    next(err)// DO YOUR MAGIC
}})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message:err.message,
  })
})

module.exports = router;
