"use server";
import ConnectDB from "../connection/ConnectDB";

const GetAll = async (model, sorting_order) => {
  try {
    await ConnectDB();
    const data = await model.find({}).sort({ _id: sorting_order || 1 });
    if (!data) {
      throw new Error(`No data found for model.`);
    }
    return data;
  } catch (error) {
    console.error(`Error in GetAll: ${error.message}`);
    return [];
  }
};

const GetUniqueDatas = async (model, sorting_order, unique_object) => {
  try {
    await ConnectDB();
    const data = await model
      .find(unique_object)
      .sort({ _id: sorting_order || 1 });
    if (!data) {
      throw new Error(`No data found for model.`);
    }
    return data;
  } catch (error) {
    console.error(`Error in GetUniqueDatas ${error.message}`);
    return [];
  }
};

const GetLimitedDatas = async (model, sorting_order, start, limit) => {
  try {
    await ConnectDB();
    const data = await model
      .find()
      .sort({ _id: sorting_order || 1 })
      .skip(start || 0)
      .limit(limit || 0)
      .select("-details -contents");
    if (!data) {
      throw new Error(`No data found for model.`);
    }
    return data;
  } catch (error) {
    console.error(`Error in GetUniqueDatas ${error.message}`);
    return [];
  }
};

const revalidate =async()=> 0

export { GetAll, GetUniqueDatas, GetLimitedDatas,revalidate };