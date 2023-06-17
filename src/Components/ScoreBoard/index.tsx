import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ScoreBoard() {
  const [myScore, setMyScore] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `http://ec2-3-35-26-239.ap-northeast-2.compute.amazonaws.com:8081/users/${localStorage.getItem(
          'userId',
        )}/average-scores`,
      )
      .then((res) => {
        const scores = Object.entries(res.data).map(([question, score]) => ({
          question,
          score,
        }));
        setMyScore(scores);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {myScore.map((item: any, idx: any) => (
        <div className="flex-col text-[15px]  flex-wrap" key={idx}>
          <div className="flex px-3 font-semibold ">{item.question}</div>
          <div className="flex items-center mt-1">
            <div className="w-2/4 h-5 mx-4 bg-[#f3f3f4] rounded">
              <div
                className="h-5 bg-gradient-to-l from-lime-500  to-lime-400 rounded"
                style={{ width: `${item.score * 20}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-lime-600">{`${item.score * 20}%`}</span>
          </div>
          <div className="px-4 pt-1 text-lime-600">{item.score}.0</div>
        </div>
      ))}
    </>
  );
}
