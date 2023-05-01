FROM mysql:latest

ENV character-set-server utf8mb4
ENV collation-server utf8mb4_general_ci
ENV default-character-set utf8mb4
ENV default-collation utf8mb4_general_ci

ENV MYSQL_DATABASE social
ENV MYSQL_ROOT_PASSWORD password

EXPOSE 3306

# ----------------------------------------------------------------------------

# Docker Command

# docker build -t social:latest .
# docker run  -d -p 3306:3306 --name social-container social:latest

# ----------------------------------------------------------------------------

# MySQL Command

# USE mysql;
# CREATE USER 'user'@'172.17.0.1' IDENTIFIED BY 'password';
# GRANT ALL PRIVILEGES ON *.* TO 'user'@'172.17.0.1' WITH GRANT OPTION;
# FLUSH PRIVILEGES;

# ----------------------------------------------------------------------------
