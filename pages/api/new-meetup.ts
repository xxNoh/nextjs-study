import { MongoClient } from "mongodb";

// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://study:study1234@cluster0.je6wuhw.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    // try catch 사용해서 핸들러 추가해야 한다.
    client.close();

    // 제대로 입력된 상태 코드
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;