import prisma from "../db";

const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await prisma.product.findUnique({
    where: {
      id,
      userId: req.user.id,
    },
  });

  res.json({ data: product });
};

const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      userId: req.user.id,
    },
  });

  res.json({ data: product });
  res.status(201);
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updated = await prisma.product.update({
    where: {
      id_userId: {
        id,
        userId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: updated });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deleted = await prisma.product.delete({
    where: {
      id_userId: {
        id,
        userId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
