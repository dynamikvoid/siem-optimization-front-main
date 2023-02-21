import React from "react";
import { LineChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Cell} from 'recharts';

const [chrtState, setChrtState] = useState({
    loading: true,
    repos: null,
  });

  useEffect(() => {
    setChrtState({ loading: true });
    const apiUrl = `/asdata/api`;
    axios
      .get(apiUrl, {
        withCredentials: true,
      })
      .then((res) => {
        const values = res.reduce(
          (acc, character) => ({
            labels: [...acc.frequency, character.frequency],
            data: [...acc.fidelity, character.fidelity],
          }),
          { labels: [], data: [] }
        );
        setChrtState({ loading: false, repos: values });
      });
  }, [setChrtState]);

  if (chrtState.loading) {
    return <span>Loading</span>;
  }

  return (
    <Line
      data={chartExample1[bigChartData + bigChartTime](chrtState.repos)}
      options={chartExample1.options}
    />
  );