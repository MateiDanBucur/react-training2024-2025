import { useState, useEffect } from "react";

const Api = (url: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, [url]);

  const getData = async () => {
    try {
      const resp = await fetch(url);
      const response = await resp.json();
      console.log(response);
      setData(response);
    } catch (err: any) {
      console.log(err.message || "Someting went wrong");
    }
  };

  const deleteItem = async (id: number) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      setData((prev) => prev.filter((item) => (item as any).id !== id));
    } catch (err: unknown) {
      console.error(err.message || "Something went wrong, please try again");
    }
  };

  return { data, getData, deleteItem };
};

export default Api;
