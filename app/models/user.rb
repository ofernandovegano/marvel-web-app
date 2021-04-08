class User < ApplicationRecord
  has_many :favorite_characters
  has_many :favorite_comics
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
