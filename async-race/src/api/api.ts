export const saveWinner = async ({ id, time }) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, { id, wins: winner.wins + 1, time: time < winner.time ? time : winner.time });
  }
};
