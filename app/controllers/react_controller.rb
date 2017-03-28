class ReactController < ApplicationController
  skip_before_action :verify_authenticity_token
  layout 'react'
  def index
    render 'react/index'
  end
end
