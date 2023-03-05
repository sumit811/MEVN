-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 05, 2023 at 07:33 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `mobile`, `created`, `updated`) VALUES
(1, 'Sumit Kumar Upadhyay', 81304209352, '2023-03-01 09:34:18', '2023-03-01 08:34:35'),
(2, 'Priyanshu', 7815425647, '2023-03-01 11:42:48', '2023-03-01 10:43:11'),
(6, 'jakasur', 3323233242, '2023-03-02 18:17:14', '2023-03-02 12:47:14'),
(10, 'poiuy', 123456, '2023-03-02 18:53:19', '2023-03-02 13:23:19'),
(12, 'Hum hain mgtow', 23423424342333, '2023-03-02 20:01:23', '2023-03-02 14:31:23'),
(17, 'shat naman madav char men', 333333333, '2023-03-02 20:06:35', '2023-03-02 14:36:35'),
(18, 'aryasamaji ', 838383884343, '2023-03-02 20:07:41', '2023-03-02 14:37:41'),
(27, 'Sakhat Launda', 89895623, '2023-03-03 17:03:43', '2023-03-03 11:33:43'),
(35, 'SuperMan', 123, '2023-03-03 23:00:56', '2023-03-04 13:56:38'),
(36, 'Brown Fox', 8978987877878, '2023-03-03 23:16:26', '2023-03-03 17:46:26'),
(38, 'update me', 3232432, '2023-03-04 12:28:08', '2023-03-04 14:21:56'),
(48, 'Lazy dog', 2334234556, '2023-03-05 10:30:07', '2023-03-05 05:09:56'),
(49, 'tweee', 2333333333, '2023-03-05 11:00:39', '2023-03-05 05:30:39'),
(50, 'Terminator33', 3232343433, '2023-03-05 11:03:55', '2023-03-05 06:13:37'),
(51, 'werewr333334533', 2343243243, '2023-03-05 11:37:07', '2023-03-05 06:15:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
