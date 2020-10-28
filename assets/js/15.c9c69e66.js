(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{365:function(_,v,t){"use strict";t.r(v);var a=t(42),i=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[_._v("#")]),_._v(" OS")]),_._v(" "),t("h2",{attrs:{id:"_1-进程、线程、协程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程、线程、协程"}},[_._v("#")]),_._v(" 1. 进程、线程、协程")]),_._v(" "),t("h3",{attrs:{id:"_1-1-什么是进程？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是进程？"}},[_._v("#")]),_._v(" 1.1 什么是进程？")]),_._v(" "),t("ul",[t("li",[_._v("进程是程序在一个数据集合上运行的过程。")]),_._v(" "),t("li",[_._v("进程实体 = 程序段 + 数据段 + PCB")]),_._v(" "),t("li",[_._v("进程资源分配和资源调度的基本单位。")]),_._v(" "),t("li",[_._v("孤儿进程和僵尸进程\n"),t("ul",[t("li",[_._v("孤儿进程：\n"),t("ul",[t("li",[_._v("一个父进程退出，而它的一个或多个子进程还在运行，那么那些子进程将成为孤儿进程。孤儿进程将被init进程(进程号为1)所收养，并由init进程对它们完成状态收集工作。")]),_._v(" "),t("li",[_._v("孤儿进程并不会有什么危害。")])])]),_._v(" "),t("li",[_._v("僵尸进程：\n"),t("ul",[t("li",[_._v("一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中。这种进程称之为僵死进程。")]),_._v(" "),t("li",[_._v("进程号就会一直被占用，但是系统所能使用的进程号是有限的。")])])])])])]),_._v(" "),t("h3",{attrs:{id:"_1-2-什么是线程？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-什么是线程？"}},[_._v("#")]),_._v(" 1.2 什么是线程？")]),_._v(" "),t("ul",[t("li",[_._v("CPU调度的基本单位。")]),_._v(" "),t("li",[_._v("更小的能独立运行的基本单位。")]),_._v(" "),t("li",[_._v("一个进程中可以有多个线程。\n"),t("ul",[t("li",[_._v("内核支持线程KST（Kernel Supported Threads）\n"),t("ul",[t("li",[_._v("在多处理器系统中，内核能够同时调度同一进程中的多个线程并行执行。")]),_._v(" "),t("li",[_._v("如果进程中的一个线程被阻塞了，内核可以知晓，并分配处理机给该进程中的其他线程。")]),_._v(" "),t("li",[_._v("线程切换快，开销小。")]),_._v(" "),t("li",[_._v("但是对于用户的线程切换，需要从用户态切换到内核态，开销大。")])])]),_._v(" "),t("li",[_._v("用户级线程ULT（User Level Threads）\n"),t("ul",[t("li",[_._v("线程的创建、撤销、同步、通信都无需内核的支持，内核甚至完全不知道用户级线程的存在。")]),_._v(" "),t("li",[_._v("用户的线程阻塞了，则会导致整个进程阻塞，因为内核只知道进程，不知道线程，就会认为是这个进程阻塞了。")])])])])])]),_._v(" "),t("h3",{attrs:{id:"_1-3-什么是协程？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-什么是协程？"}},[_._v("#")]),_._v(" 1.3 什么是协程？")]),_._v(" "),t("ul",[t("li",[_._v("协程是一种比线程更加轻量级的存在，协程处在线程的环境中，一个线程可以存在多个协程，可以将协程理解为线程中的一个个任务。")]),_._v(" "),t("li",[_._v("不像进程和线程，协程并不受操作系统的管理，而是被具体的应用程序代码所控制。")]),_._v(" "),t("li",[_._v("协程属于用户态，协程之间的切换不需要系统调用，")]),_._v(" "),t("li",[_._v("其本质就是控制流主动让出和恢复机制，让控制流更加流畅")])]),_._v(" "),t("h3",{attrs:{id:"_1-3-进程和线程的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-进程和线程的区别？"}},[_._v("#")]),_._v(" 1.3 进程和线程的区别？")]),_._v(" "),t("ul",[t("li",[_._v("基本单位：进程是资源分配和调度的基本单位，线程是CPU调度的基本单位。")]),_._v(" "),t("li",[_._v("系统开销：进程的切换涉及进程上下文的切换，线程切换的代价远小于进程切换。")]),_._v(" "),t("li",[_._v("拥有资源：线程本身并不拥有系统资源，而是仅有一点必不可少的、能保证独立运行的资源（程序计数器PC、一组寄存器和栈）。此外还允许多个线程共享该进程所拥有的资源。而进程拥有比线程更多的资源。")]),_._v(" "),t("li",[_._v("独立性：线程间的独立性比进程间的独立性要低得多，因为线程是提高并发性而合作的，它们共享进程的内存地址空间和资源。而进程一般是独占某块内存。")])]),_._v(" "),t("h3",{attrs:{id:"_1-4-线程和协程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-线程和协程的区别"}},[_._v("#")]),_._v(" 1.4 线程和协程的区别")]),_._v(" "),t("ul",[t("li",[_._v("调度方式：线程是操作系统调度，协程是应用程序自己调度（用户态）")]),_._v(" "),t("li",[_._v("栈空间：协程的栈空间是可以动态调整的")]),_._v(" "),t("li",[_._v("并发/并行：\n"),t("ul",[t("li",[_._v("协程是协作式多任务，只能并发")]),_._v(" "),t("li",[_._v("线程是抢占式多任务，可以并发也可以并行")])])])]),_._v(" "),t("h3",{attrs:{id:"_1-5-进程通信（ipc，inter-process-communication）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-进程通信（ipc，inter-process-communication）"}},[_._v("#")]),_._v(" 1.5 进程通信（IPC，Inter-Process Communication）")]),_._v(" "),t("ul",[t("li",[_._v("管道：半双工，数据只能单向流动，只能父子进程通信。实质是一个内核缓冲区")]),_._v(" "),t("li",[_._v("信号：用于Linux系统中，信号可以在任何时候发给某一进程，而无需知道该进程的状态。")]),_._v(" "),t("li",[_._v("信号量：信号量是一个计数器，可以用来控制多个进程对共享资源的访问。它常作为一种锁机制，防止某进程正在访问共享资源时，其他进程也访问该资源。因此，主要作为进程间以及同一进程内不同线程之间的同步手段。")]),_._v(" "),t("li",[_._v("消息队列：在消息的传输过程中保存消息的容器。允许一个或多个进程向它写入与读取消息。异步、解耦、削峰。生产者-消费者模型。kafak、RabbitMQ")]),_._v(" "),t("li",[_._v("共享内存：共享内存就是映射一段能被其他进程所访问的内存，这段共享内存由一个进程创建，但多个进程都可以访问。共享内存是最快的 IPC 方式，它是针对其他进程间通信方式运行效率低而专门设计的。它往往与其他通信机制，如信号两，配合使用，来实现进程间的同步和通信。")]),_._v(" "),t("li",[_._v("套接字： 套解口也是一种进程间通信机制，与其他通信机制不同的是，它可用于不同及其间的进程通信。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/imgs/IPC.png",alt:"image"}})]),_._v(" "),t("h3",{attrs:{id:"_1-6-进程同步的原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-进程同步的原则"}},[_._v("#")]),_._v(" 1.6 进程同步的原则")]),_._v(" "),t("ul",[t("li",[_._v("空闲让进：临界区空闲时，可以允许一个请求进入临界区的进程立即进入临界区。")]),_._v(" "),t("li",[_._v("忙则等待：当已有进程进入临界区时，其他试图进入临界区的进程必须等待。")]),_._v(" "),t("li",[_._v("有限等待：对请求访问的进程，应保证能在有限时间内进入临界区。")]),_._v(" "),t("li",[_._v("让权等待：当进程不能进入临界区时，应立即释放处理器，防止进程忙等待。")])]),_._v(" "),t("h2",{attrs:{id:"_2-内核态与用户态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-内核态与用户态"}},[_._v("#")]),_._v(" 2. 内核态与用户态")]),_._v(" "),t("h3",{attrs:{id:"_2-1-概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概念"}},[_._v("#")]),_._v(" 2.1 概念")]),_._v(" "),t("ul",[t("li",[_._v("内核态：cpu 可以访问内存的所有数据，包括外围设备，例如硬盘，网卡，cpu 也可以将自己从一个程序切换到另一个程序。")]),_._v(" "),t("li",[_._v("用户态：只能受限的访问内存，且不允许访问外围设备，占用 cpu 的能力被剥夺，cpu 资源可以被其他程序获取。")])]),_._v(" "),t("h3",{attrs:{id:"_2-2-用户态到内核态的切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-用户态到内核态的切换"}},[_._v("#")]),_._v(" 2.2 用户态到内核态的切换")]),_._v(" "),t("ul",[t("li",[_._v("异常事件： 当 CPU 正在执行运行在用户态的程序时，突然发生某些预先不可知的异常事件，这个时候就会触发从当前用户态执行的进程转向内核态执行相关的异常事件，典型的如缺页异常。")]),_._v(" "),t("li",[_._v("外围设备的中断：当外围设备完成用户的请求操作后，会像 CPU 发出中断信号，此时，CPU 就会暂停执行下一条即将要执行的指令，转而去执行中断信号对应的处理程序，如果先前执行的指令是在用户态下，则自然就发生从用户态到内核态的转换。")])]),_._v(" "),t("h2",{attrs:{id:"_3-五种i-o模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-五种i-o模型"}},[_._v("#")]),_._v(" 3. 五种I/O模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"/imgs/IO.png",alt:"image"}})]),_._v(" "),t("h2",{attrs:{id:"_4-死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-死锁"}},[_._v("#")]),_._v(" 4. 死锁")]),_._v(" "),t("h3",{attrs:{id:"_4-1-产生死锁的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-产生死锁的原因"}},[_._v("#")]),_._v(" 4.1 产生死锁的原因")]),_._v(" "),t("ul",[t("li",[_._v("死锁：进程间因为竞争资源而导致的一种僵持状态。")]),_._v(" "),t("li",[_._v("竞争资源（不可抢占性资源、可消耗性资源）")]),_._v(" "),t("li",[_._v("进程间推进顺序非法。（进程在运行过程中，请求和释放资源的顺序不当）")])]),_._v(" "),t("h3",{attrs:{id:"_4-2-死锁的必要条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-死锁的必要条件"}},[_._v("#")]),_._v(" 4.2 死锁的必要条件")]),_._v(" "),t("ul",[t("li",[_._v("互斥：进程对所分配的资源排他性使用")]),_._v(" "),t("li",[_._v("请求和保持：进程有一/多个资源了，还在请求新的资源")]),_._v(" "),t("li",[_._v("不可抢占：进程所分配的资源，用完之前不能被剥夺，只能在用完的时候进程自己释放。")]),_._v(" "),t("li",[_._v("循环等待：发生死锁的时候，必然存在一个进程与资源的环形链")])]),_._v(" "),t("h3",{attrs:{id:"_4-3-预防死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-预防死锁"}},[_._v("#")]),_._v(" 4.3 预防死锁")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("“互斥”")]),_._v("：必不可少，无法打破。")]),_._v(" "),t("li",[t("strong",[_._v("“请求和保持”")]),_._v("：一次性分配所有所需的资源\n"),t("ul",[t("li",[_._v("（或者 需要什么就请求什么，不再需要什么就释放什么）")]),_._v(" "),t("li",[_._v("简单、易实现、安全")]),_._v(" "),t("li",[_._v("资源被浪费、进程延迟运行")])])]),_._v(" "),t("li",[t("strong",[_._v("“不可抢占”")]),_._v("：进程已经获得一些资源的时候，如果请求新的资源失败，则放弃当前已经拥有的资源\n"),t("ul",[t("li",[_._v("实现复杂、代价大，可能前功尽弃、进程前后两次运行的信息不连续")])])]),_._v(" "),t("li",[t("strong",[_._v("“循环等待”")]),_._v("：系统将资源按类型先行排序，并且赋予不同的序号。进程对资源的请求必须严格按照资源的序号递增的次序提出，这样就不会出现环路。\n"),t("ul",[t("li",[_._v("进程使用资源的顺序，可能与系统规定的顺序不同，造成资源的浪费。")]),_._v(" "),t("li",[_._v("序号稳定之后，限制了新设备的增加")])])])]),_._v(" "),t("h2",{attrs:{id:"_5-页面置换算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-页面置换算法"}},[_._v("#")]),_._v(" 5. 页面置换算法")]),_._v(" "),t("h3",{attrs:{id:"_5-1-概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-概念"}},[_._v("#")]),_._v(" 5.1 概念")]),_._v(" "),t("ul",[t("li",[_._v("虚拟内存允许程序不必将地址空间中的每一页都映射到物理内存，表示程序不用完全调入内存就可以运行。因此有限的内存也可以运行大程序")]),_._v(" "),t("li",[_._v("当程序引用到不在物理内存的页时，这个时候需要将缺失的部分装入物理内存，并重新执行，如果此时内存已满，则要执行页面置换算法。")])]),_._v(" "),t("h3",{attrs:{id:"_5-2-页面调入过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-页面调入过程"}},[_._v("#")]),_._v(" 5.2 页面调入过程")]),_._v(" "),t("ol",[t("li",[_._v("程序访问的页面不在内存时，向CPU发出缺页中断")]),_._v(" "),t("li",[_._v("中断处理程序保存CPU现场，分析中断原因，转入缺页中断处理程序")]),_._v(" "),t("li",[_._v("若内存满，按照某种置换算法从内存选一页调出，若被修改了，还需要写回磁盘。")]),_._v(" "),t("li",[_._v("把所缺的页调入内存，并写入快表。")]),_._v(" "),t("li",[_._v("地址机构寻址，得到物理地址，访问对应的内存的数据。")])]),_._v(" "),t("h3",{attrs:{id:"_5-3-页面置换算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-页面置换算法"}},[_._v("#")]),_._v(" 5.3 页面置换算法")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("最佳置换算法（OPT，Optlmal）：最佳置换算法是所选择被淘汰的页面，将是以后永不使用的，或许是在最长时间内不再被访问的页面。理想化，难以实现。")])]),_._v(" "),t("li",[t("p",[_._v("先进先出置换算法（FIFO，First In First Out）：该算法总是淘汰最先进入内存的页面，即选择在内存中驻留时间最久的页面予以淘汰 。")]),_._v(" "),t("p",[_._v("页面调入的先后并不能反映页面的使用情况。所以这个效率差。")])]),_._v(" "),t("li",[t("p",[_._v("最近最久未使用置换算法（LRU，Least Recently Used）")]),_._v(" "),t("ul",[t("li",[_._v("选择最近最久未使用的页面予以淘汰。")]),_._v(" "),t("li",[_._v("硬件支持：寄存器 和 栈")])])]),_._v(" "),t("li",[t("p",[_._v("最不经常使用算法（Least Frequently Used，LFU）")])]),_._v(" "),t("li",[t("p",[_._v("时钟置换算法（Clock）：")]),_._v(" "),t("ul",[t("li",[_._v("每页设置一个访问位，该页第一次装入内存或者被重新访问到时，置 = 1")]),_._v(" "),t("li",[_._v("置换时，检查每一页：\n"),t("ul",[t("li",[_._v("若 = 1，则置 = 0；")]),_._v(" "),t("li",[_._v("若 = 0，则换出。")])])]),_._v(" "),t("li",[_._v("其实就是多给被访问过的页面一次机会。")])])]),_._v(" "),t("li",[t("p",[_._v("改进的时钟置换算法（Clock）：")]),_._v(" "),t("ul",[t("li",[_._v("除了访问位，还要考虑是否被修改过：\n"),t("ul",[t("li",[_._v("访问过，修改过：别搞我")]),_._v(" "),t("li",[_._v("访问过，未修改：最好也别搞我")]),_._v(" "),t("li",[_._v("未访问，但修改过：也还是别搞我")]),_._v(" "),t("li",[_._v("未访问，也未修改：搞我搞我")])])]),_._v(" "),t("li",[_._v("扫描：\n"),t("ul",[t("li",[_._v("先扫描第一遍：找第四种，")]),_._v(" "),t("li",[_._v("没有的话扫描第二遍，访问位置0，寻找未访问，但修改过的。")]),_._v(" "),t("li",[_._v("没有的话第三遍，这个时候一定能成功")])])])])])]),_._v(" "),t("h2",{attrs:{id:"_6-分页和分段式的存储管理方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-分页和分段式的存储管理方式"}},[_._v("#")]),_._v(" 6. 分页和分段式的存储管理方式")]),_._v(" "),t("h3",{attrs:{id:"_6-1-分页式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-分页式"}},[_._v("#")]),_._v(" 6.1 分页式")]),_._v(" "),t("ul",[t("li",[_._v("页内碎片：内零头")]),_._v(" "),t("li",[_._v("页（逻辑）")]),_._v(" "),t("li",[_._v("块（物理）")]),_._v(" "),t("li",[_._v("页表：系统为每个进程建立的一张页面映射表，页->块（页号->块号）")]),_._v(" "),t("li",[_._v("快表：高速缓冲寄存器，存放最近访问的页号/块号映射对。")]),_._v(" "),t("li",[_._v("寻址（逻辑地址 -> 物理地址）")]),_._v(" "),t("li",[_._v("两级/多级页表")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/imgs/page1.png",alt:"image"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"/imgs/page2.png",alt:"image"}})]),_._v(" "),t("h3",{attrs:{id:"_6-2-分段式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-分段式"}},[_._v("#")]),_._v(" 6.2 分段式")]),_._v(" "),t("ul",[t("li",[_._v("在分段存储管理方式中，作业的地址空间被划分为若干个段，每个段定义了一组逻辑信息。")]),_._v(" "),t("li",[_._v("每个段都有自己的名字。")]),_._v(" "),t("li",[_._v("每个段都从0开始编址，并采用一段连续的地址空间。段的长度由相应的逻辑信息组的长度决定，因而各段长度不等。")]),_._v(" "),t("li",[_._v("段表：段号，该段在内存中的起始地址（基址），段的长度。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/imgs/segment.png",alt:"image"}})]),_._v(" "),t("h3",{attrs:{id:"_6-3-分段和分页的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-分段和分页的区别"}},[_._v("#")]),_._v(" 6.3 分段和分页的区别")]),_._v(" "),t("p",[_._v("外零头：可变分区时，可能会形成大量较小的，难以再分配的分区。动态划分没有内零头，静态划分有内零头")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[_._v("分页")]),_._v(" "),t("th",[_._v("分段")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("信息的物理单位，减少外零头，提高内存利用率。")]),_._v(" "),t("td",[_._v("段是信息的逻辑单位，方便用户。")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("大小固定，由系统决定")]),_._v(" "),t("td",[_._v("长度不固定，取决于用户所编写的程序。")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("作业地址空间是一维的，因为页是连续的，逻辑地址空间是一维的，一张页表走到底就行了。（直接根据逻辑地址可以算出页号和页内地址，取余和除法取整）")]),_._v(" "),t("td",[_._v("作业地址空间是二维的，数据段、代码段、堆栈段等段号连续，但物理地址空间不连续。（二维：哪个段+段内地址）")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("减少了外零头，但不能避免内零头")]),_._v(" "),t("td",[_._v("内零头不清楚，但是因为物理地址空间不连续，可能会产生一些外零头")])])])]),_._v(" "),t("h3",{attrs:{id:"_6-4-段页式的存储管理方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-段页式的存储管理方式"}},[_._v("#")]),_._v(" 6.4 段页式的存储管理方式")]),_._v(" "),t("p",[_._v("先将用户程序分成若干个段，再把每个段分成若干个页，并为每一个段赋予一个段名。（先分段，段内再分页）")]),_._v(" "),t("p",[t("img",{attrs:{src:"/imgs/page&segment.png",alt:"image"}})]),_._v(" "),t("p",[_._v("段号->段表->页表地址-> + 页号->块号-> +页内地址 => 物理地址")])])}),[],!1,null,null,null);v.default=i.exports}}]);