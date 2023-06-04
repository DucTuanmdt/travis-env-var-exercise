function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log("Microservices rock!");
    console.log("THE_MESSAGE value: ", process.env.THE_MESSAGE);
    await sleep(5000);
  }
}

main();
