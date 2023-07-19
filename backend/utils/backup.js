const exec = require('child_process').exec;

const backupDatabase = () => {
  const timestamp = new Date().toISOString();
  const command = `mongodump --db=mydatabase --archive=./backups/mydatabase-${timestamp}.gz --gzip`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Ошибка при создании резервной копии базы данных:', error);
    } else {
      console.log('Резервная копия базы данных создана успешно');
    }
  });
};

backupDatabase();
setInterval(backupDatabase, 86400000); // Создавать резервную копию каждые 24 часа (86400000 миллисекунд)
