defmodule FilesWeb.PageController do
  use FilesWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
