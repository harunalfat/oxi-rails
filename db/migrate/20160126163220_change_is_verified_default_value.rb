class ChangeIsVerifiedDefaultValue < ActiveRecord::Migration
  def change
    change_column :users, :is_verified, :boolean, default: true
  end
end
