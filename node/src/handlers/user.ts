import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

const createNewUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ message: "Unexpected error occurred." });
  }
};

const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  console.log("here", user);

  const isValid = await comparePasswords(req.body.password, user.password);
  console.log("here", isValid, user);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Not authorized " });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};

export { createNewUser, signIn };
