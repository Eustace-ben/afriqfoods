-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2023 at 02:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `afriqfoods`
--

-- --------------------------------------------------------

--
-- Table structure for table `cuisine`
--

CREATE TABLE `cuisine` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `recipeName` varchar(50) NOT NULL,
  `recipes` varchar(50) NOT NULL,
  `recipe_desc` varchar(2000) NOT NULL,
  `images` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cuisine`
--

INSERT INTO `cuisine` (`id`, `user_id`, `recipeName`, `recipes`, `recipe_desc`, `images`) VALUES
(29, 14, 'Nsala Soup', 'Nigerian_recipe', 'Ofe Nsala is known as white soup because palm oil is not used for the preparation, unlike other traditional soups. While it is traditionally made with catfish, one can also make use of chicken', 'ofensala.jpg'),
(30, 14, 'edikaikong Soup', 'Nigerian_recipe', 'Edikang ikong is a vegetable soup that originated among the Efik people of Cross River State and Akwa Ibom State in Southsouthern Nigeria. It is considered to be a delicacy among some Nigerians, and is sometimes served during occasions of importance', 'edikaikong.png'),
(31, 14, 'okra soup', 'Nigerian_recipe', 'Okra or Okro soup is prepared using the edible green seed pods of the okra flowering plant as a primary ingredient. Other vegetables can be added to the soup as well, such as ewedu, kerenkere, or Ugu leaf.', 'okra soup.jpg'),
(32, 14, 'Nkwobi ', 'Nigerian_recipe', ' It is a popular eat out meal common in Nigerian restaurants or beer parlors which may seem complicated but in reality is easy to make and prepared with simple ingredients.', 'nkwobi.jpg'),
(33, 14, 'Bitterleaf soup', 'Nigerian_recipe', 'Bitter Leaf Soup, also known as Ofe Onugbu is a popular Nigerian soup. Bitter leaf Soup is peculiar to the Igbo tribe of Eastern Nigeria. A lot of non-Igbos shy away from bitter leaf soup (Well,  I did for the longest time) because they think that, true to it’s name, it is a very bitter soup. ', 'bitterleaf-soup.jpg'),
(46, 13, 'Àkàrà', 'Nigerian_recipe', 'Àkàrà is a West African delicacy, which is also eaten in parts of Brazil. This fritter, made from black-eyed beans, has many variations.\r\nAs commonly made in Nigeria, the beans are peeled, washed, and blended into a paste, which is then deep-fried in vegetable or palm oil.\r\nIt tastes delicious with spices, fish, and other condiments (optional). Àkàrà, which is highly proteinous and full of fiber, is great for breakfast.', 'ÃkÃ rÃ .jpg'),
(47, 13, 'Jollof rice', 'Nigerian_recipe', 'Jollof rice is a popular dish eaten in West African countries such as Nigeria, Ghana, Cameroon, Liberia, Mali, Togo, Gambia, and Côte d’Ivoire.\r\nThere is, however, a prominent rivalry between Nigeria and Ghana over which variation of the meal tastes better.', 'jellof.jpg'),
(48, 13, 'Iyan', 'Nigerian_recipe', 'Iyan is a bunch of yam pieces pounded or mashed using a mortar and pestle, blender, or mixer.\r\nThe process produces a smooth, sticky dough, making it slightly different from mashed potatoes.\r\nIt can be enjoyed with various kinds of tasty stews and soups, like egusi soup (melon seed soup), or efo riro (leafy vegetable stew). The soup may be served on the same plate or on a different plate. ', 'iyan.jpg'),
(49, 13, 'Puff-puff', 'Nigerian_recipe', 'Puff-puff is a fried sweet dough ball made from flour, sugar, butter, yeast or baking powder, and vegetable oil.\r\n\r\nIt is prominent in some parts of West Africa, with varying names. For example, in Nigeria and Cameroon, it is called Puff-puff; while in Ghana, it is called Bofrot. \r\n\r\nPuff-puff is commonly eaten during picnics, ceremonies, and parties as appetizers or desserts.\r\n\r\nIt may be garnished with various flavors like vanilla and cinnamon. In addition, it may be taken as a stand-alone snack or as a light breakfast meal with any beverage. ', 'Puff-Puff.jpg'),
(50, 13, 'Bole', 'Nigerian_recipe', 'Bole is a roasted plantain dish in Nigeria. It is native to the Yoruba people of Nigeria.[1][2][3] It is referred to as \'boli\' in South West Nigeria these people are known as the Yoruba people and is eaten with groundnuts.[4][5] The Yorubas have been enjoying this delicacy for ages, it can be consumed as a snack or main meal which can be accompanied with pepper sauce filled with meat, roasted fish or fried chicken especially during the festive period.[', 'Boli.jpg'),
(51, 13, 'Porridge Yam', 'Nigerian_recipe', 'Asaro is an easy one-pot dish of yam porridge/pottage which is popular in western Nigeria. ', 'Asaro.jpg'),
(52, 13, 'Moi-moi ', 'Nigerian_recipe', 'Moi-moi or moimoi is a steamed or boiled bean pudding made from a mixture of washed and peeled black-eyed beans, often combined with onions and fresh ground red peppers, spices and fish/egg/crayfish.', 'Moi moi.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `about` varchar(1200) NOT NULL,
  `skills` varchar(200) NOT NULL,
  `Recipes` varchar(1200) NOT NULL,
  `website` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `user_id`, `about`, `skills`, `Recipes`, `website`) VALUES
(4, 13, ' this is testing', ' Cooking', 'oha Soup african style', ' cookmaster.com'),
(5, 14, 'they variety is the spice of life  HDHD', 'software engineer', 'Vegetable Soup', 'mysiteforcooking.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `Role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `Role`) VALUES
(13, '  chuks', 'chuks@gmail.com', '$2a$08$u.FofG0xhDAYDVP08.tU9.ljHk5eMzXZ/Q4I17iDmapANAAOT8p8m', ''),
(14, 'nkem', 'nkem@gmail.com', '$2a$08$gToGOGP/RwVMEWI3fTYSge50K892SGE6HLNIySsH8bZ.85s1rIWc.', ''),
(15, 'kelly', 'kelly@gmail.com', '$2a$08$hU/zAP557njZgrtPk2r02un8kZ9YkdV8JVMLtD19Ven3osCv27U0K', ''),
(16, 'chi', 'chi@gmail.com', '$2a$08$Hw.wtvfFKnN9gqa6VBoF0OPiO9uOaBmLGaqGltd6zz3oPX4GMkM.m', 'admin'),
(17, 'aniekan', 'aniekan@gmail.com', '$2a$08$YM/9HwDBs0DViHOujsUOxuiHbaOF3RlrK1gTojesX9/0G00kTPlJ2', ''),
(18, ' Mrww', 'ww@gmail.com', '$2a$08$yweaWTzD.wc6gqx/ikePlORZr79jjJz.mqGUpcyGGgKyV.ia2diQG', ''),
(19, 'mick', 'mick@gmail.com', '$2a$08$Cn4XfC/AHT3BR/WFW.XAT.W5f1tBadgY.485jJ/5XVSIvslOzsVP2', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cuisine`
--
ALTER TABLE `cuisine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cuisine`
--
ALTER TABLE `cuisine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
