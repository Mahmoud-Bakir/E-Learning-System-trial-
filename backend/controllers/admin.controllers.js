const Document=require("../models/documentModel")


exports.add = async (req, res) => {
  const { title, content } = req.body;

  const document = new Document();
  document.title = title;
  document.content = content;
  console.log(document)
  await document.save();
  res.json({ document })
}