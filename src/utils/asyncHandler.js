const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}

//High Order functions are the functions which can accept function as a parameter as well as return them.
//const asyncHandler=()=>{}
//const asyncHandler=(func)=>()=>{}
//const asyncHandler=(func)=>async(req,res,next)=>{}

// const asyncHandler=(fn)=>async()=>{
//    try{
//     await fn(req,res,next)
//    }catch(error){
//      res.status(error.code||500).json({
//         success:false,
//         message:err.message,
//      })
//    }
// }