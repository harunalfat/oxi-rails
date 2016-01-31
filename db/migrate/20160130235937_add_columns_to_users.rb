class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :pob, :string
    add_column :users, :dob, :date
    add_column :users, :address, :string
    add_column :users, :phone, :string
    add_column :users, :tagline, :string
    add_column :users, :about, :text
  end
end
