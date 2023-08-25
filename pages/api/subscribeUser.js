import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    return new Promise((resolve, reject) => {
      try {
        console.log(req.body.mail);
        console.log(process.env.SENDGRID_MAILING_ID);
        console.log(process.env.SENDGRID_API_KEY);
        axios
          .put(
            "https://api.sendgrid.com/v3/marketing/contacts",
            {
              contacts: [{ email: `${req.body.mail}` }],
              list_ids: [process.env.SENDGRID_MAILING_ID],
            },
            {
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
              },
            }
          )
          .then((result) => {
            res.status(200).send({
              message:
                "Your email has been succesfully added to the mailing list. Welcome 👋",
            });
            console.log("success");
            resolve();
          })
          .catch((err) => {
            console.log(err);
            if (err.response) {
              console.log(err.response.body);
            }
            res.status(400).json({ status: "ERROR", message: err.message });
            resolve();
          });
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response.body);
        }
        res.status(400).json({ status: "ERROR", message: error.message });
        resolve();
      }
    });
  }
}
