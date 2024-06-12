const product=require("../Models/product.model.js")

const getProducts=async (req,res)=>{
    try {
        const products = await product.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const getProduct=async (req,res)=>{
  try{
    const { id } = req.params;
    const products= await product.findById(id);
    res.status(200).json(products);
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}

const addProduct=async (req,res)=>{
  try{
    const products= await product.create(req.body);
    res.status(200).json(products);
   }
   catch(error){
     res.status(500).json({message:error.message});
   }
}

const UpdateProduct=async (req,res)=>{
    try{
        const { id } = req.params;
        const products= await product.findByIdAndUpdate(id, req.body);
    
        if(!products){
         return res.status(404).json({message:"Product Not Found"});
        }
    
        const updatedproducts= await product.findById(id);
    
        res.status(200).json(updatedproducts);
      }
      catch(error){
        res.status(500).json({message:error.message});
      }
}

const deleteProduct=async (req,res)=>{
    try{
        const { id } = req.params;
        const products= await product.findByIdAndDelete(id);
        if(!products){
          return res.status(404).json({message:"Product Not Found"});
         }
    
         res.status(200).json({message:"Product Deleted Successfully"});
        }
      catch(error){
        res.status(500).json({message:error.message});
      }
  }

  const uploadFile = async (req, res) => {
    try {
        const newFile = new File({
            name: req.file.originalname,
            path: req.file.path,
            size: req.file.size
        });

        const savedFile = await newFile.save();
        res.json({ message: 'File uploaded successfully', file: savedFile });
    } catch (error) {
        // If an error occurs, delete the uploaded file
        fs.unlinkSync(req.file.path);
        res.status(500).json({ error: 'Failed to save file to database' });
    }
}



    





module.exports={
    getProducts,
    getProduct,
    addProduct,
    UpdateProduct,
    deleteProduct,
    uploadFile,
}
