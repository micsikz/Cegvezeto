package hu.flowacademy.Cegvezeto.game.controller;

import hu.flowacademy.Cegvezeto.game.Logic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "worker")
public class WorkerController {

    @Autowired
    private Logic logic;

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/buy-workere")
    public Integer buyWorker(@RequestBody int n) {
        return logic.hiringWorkers(n);
    }

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/dismiss-worker")
    public Integer dismissWorker(@RequestBody int n) {
        return logic.dismissWorkers(n);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/buy-worker")
    public int javaWorkers() {
        return logic.javaWorkers();
    }


}
