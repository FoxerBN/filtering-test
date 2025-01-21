import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    const {
        page = 1,
        limit = 10,
        sort = "year",
        order = "desc",
        minYear,
        maxYear,
        minPrice,
        maxPrice,
      } = req.query;

      try {
        const filter = {};

        if (minYear || maxYear) {
            filter.year = {};
            if(minYear) filter.year.$gte = Number(minYear);
            if (maxYear) filter.year.$lte = Number(maxYear);
        }

        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
          }
          
        const products = await Product.find(filter)
        .sort({ [sort]: order === "asc" ? 1 : -1})
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit))

        const total = await Product.countDocuments(filter)

        res.status(200).json({products,total,currentPage: Number(page),totalPages: Math.ceil(total / Number(limit)) });
      } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server Error" });
      }
}