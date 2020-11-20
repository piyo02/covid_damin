-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 20 Nov 2020 pada 14.21
-- Versi Server: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `damin`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cases`
--

CREATE TABLE `cases` (
  `id` int(11) NOT NULL,
  `country` varchar(255) NOT NULL,
  `month` int(11) NOT NULL,
  `new_cases` int(11) NOT NULL,
  `cumulative_cases` int(11) NOT NULL,
  `new_deaths` int(11) NOT NULL,
  `cumulative_deaths` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `cases`
--

INSERT INTO `cases` (`id`, `country`, `month`, `new_cases`, `cumulative_cases`, `new_deaths`, `cumulative_deaths`) VALUES
(1, 'Indonesia', 1, 0, 0, 0, 0),
(2, 'Indonesia', 2, 0, 0, 0, 0),
(3, 'Indonesia', 3, 1528, 1528, 136, 136),
(4, 'Indonesia', 4, 8590, 10118, 836, 792),
(5, 'Indonesia', 5, 16355, 26473, 821, 1613),
(6, 'Indonesia', 6, 29429, 55902, 1192, 2805),
(7, 'Indonesia', 7, 50434, 106336, 2253, 5058),
(8, 'Indonesia', 8, 62859, 169195, 2203, 7261),
(9, 'Indonesia', 9, 113529, 282724, 3340, 10601),
(10, 'Malaysia', 1, 12, 12, 0, 0),
(11, 'Malaysia', 2, 16, 28, 0, 0),
(12, 'Malaysia', 3, 2598, 2626, 37, 37),
(13, 'Malaysia', 4, 3319, 5945, 63, 100),
(14, 'Malaysia', 5, 1817, 7762, 15, 115),
(15, 'Malaysia', 6, 875, 8637, 6, 121),
(16, 'Malaysia', 7, 327, 8964, 3, 124),
(17, 'Malaysia', 8, 370, 9334, 2, 126),
(18, 'Malaysia', 9, 1890, 11224, 10, 136),
(19, 'Filipina', 1, 5, 5, 0, 0),
(20, 'Filipina', 2, 0, 7, 0, 1),
(21, 'Filipina', 3, 1539, 1546, 77, 78),
(22, 'Filipina', 4, 6666, 8212, 480, 558),
(23, 'Filipina', 5, 9874, 18086, 399, 957),
(24, 'Filipina', 6, 18352, 36438, 298, 1255),
(25, 'Filipina', 7, 52936, 89374, 728, 1983),
(26, 'Filipina', 8, 128022, 217396, 1537, 3520),
(27, 'Filipina', 9, 91907, 309303, 1928, 5448),
(28, 'Singapura', 1, 20, 20, 0, 0),
(29, 'Singapura', 2, 86, 106, 0, 0),
(30, 'Singapura', 3, 773, 879, 3, 3),
(31, 'Singapura', 4, 14762, 15641, 1, 14),
(32, 'Singapura', 5, 18725, 34366, 9, 23),
(33, 'Singapura', 6, 9295, 43661, 3, 26),
(34, 'Singapura', 7, 8184, 51809, 1, 27),
(35, 'Singapura', 8, 4962, 56771, 0, 27),
(36, 'Singapura', 9, 971, 57742, 0, 27);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cases`
--
ALTER TABLE `cases`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cases`
--
ALTER TABLE `cases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
