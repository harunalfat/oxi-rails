class ChangeIsVerifiedDefaultValue2 < ActiveRecord::Migration
  def change
    change_column :users, :is_verified, :boolean, default: false
  end
end
