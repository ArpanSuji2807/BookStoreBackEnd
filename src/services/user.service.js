import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create new user
export const UserRegistration = async (body) => {
  const mail = await User.findOne({email:body.email})
  if(mail){
    throw new Error("Email Id already exists");
  }else{
    const saltRounds = 10
    const hashpassword = await bcrypt.hash(body.password, saltRounds);
    body.password = hashpassword;
    const data = await User.create(body);
    return data;
  }
};

//User Login
export const UserLogin = async (body) => {
  const data = await User.findOne({ email: body.email });
  console.log(data);
  if (data != null) {
    const comparePassword = await bcrypt.compare(body.password, data.password);
    if (comparePassword) {
      const token = jwt.sign({ "Id": data._id, "firstName": data.firstName, "lastName": data.lastName, "email": data.email }, process.env.SECRET_KEY);
      return token;
    }
    else {
      throw new Error("Password is incorrect");
    }
  }
  else {
    throw new Error("Email Id doesn't exist");
  }
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
