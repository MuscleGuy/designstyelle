# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :files,
  ecto_repos: [Files.Repo]

# Configures the endpoint
config :files, FilesWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "cWzAB6TXEZ0RtEZ+mKV9d9NxXTh4KlE+Au6QPY/5nT27bF19VXzDMZJrPLX2UyDO",
  render_errors: [view: FilesWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Files.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
