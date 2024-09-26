const asyncHandler = (fn) => async (req, res, next) => {
  try{
    await fn(req,res,next)
  }
  catch(err){
   res.status(err.code||500).json({
    success:true,
    message:err.message
   })
  }
};

export  {asyncHandler};
