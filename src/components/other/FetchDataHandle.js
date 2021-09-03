import React from "react";
import { Skeleton, Empty } from "antd";

export default function FetchDataHandle({
  data,
  errorMessage = "Falha ao obter produtos, tente novamente",
  emptyDescription = "Nenhum produto nesta categoria",
  renderData,
}) {
  return data.loading ? (
    <Skeleton active />
  ) : data.error ? (
    <h3>{errorMessage}</h3>
  ) : data.data.length > 0 ? (
    renderData && renderData(data.data)
  ) : (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={emptyDescription}
    />
  );
}
