class Date
  def as_json(options = {})
    strftime("%Y-%m-%d")
  end
end
