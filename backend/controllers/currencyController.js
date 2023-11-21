import Currency from "../models/Currency.js";

//create new Currency
export const createCurrency = async (req, res) => {
  const newCurrency = new Currency(req.body);

  try {
    const savedCurrency = await newCurrency.save();

    res.status(200).json({
      success: true,
      message: "successfully created new Currency",
      data: savedCurrency,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "failed to create new Currency" });
  }
};

//get All Currency
export const getAllCurrency = async (req, res) => {

  try {
    const currencies = await Currency.find({})
    res.status(200).json({
      success: true,
      message: "successfully fetched all currency info",
      data: currencies,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get single currency
export const getSingleCurrency = async (req, res) => {
  try {
    const id = req.params.id;
  
    const singleCurrency = await Currency.findById(id);

    res.status(200).json({
      success: true,
      message: "successfully fetched currency info",
      data: singleCurrency,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "currency not found" });
  }
};