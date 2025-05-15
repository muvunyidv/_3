CREATE TABLE `drugs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `reorder_level` int(11) DEFAULT NULL
) 


