import axios from "axios";

const AIRTABLE_API_KEY = "your_airtable_api_key";
const BASE_ID = "your_airtable_base_id";
const TABLE_NAME = "your_table_name";

export const sendDataToAirtable = async (data) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  try {
    const response = await axios.post(
      url,
      {
        fields: {
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
          plan: data.plan,
          price: data.price,
          addOns: data.addOns.join(", "),
        },
      },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Data successfully sent to Airtable:", response.data);
  } catch (error) {
    console.error("Error sending data to Airtable:", error);
  }
};
